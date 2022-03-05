package com.vytrack.pages;

import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class GridPage extends BasePage {

    public static int initialIndexOfDrop;

    @FindBy(css = ".column-manager.dropdown>a")
    public WebElement gridButton;

    @FindBy(css = ".column-manager-title")
    public WebElement gridSettingsTitle;

    @FindBy(css = ".title-cell>label")
    public List<WebElement> gridSettingsLabels;

    @FindBy(css = "span.column-filter-match")
    public List<WebElement> searchBoxResults;

    @FindBy(xpath = "//input[@data-role='column-manager-search']")
    public WebElement quickSearchBox;

    @FindBy(css = ".grid-header-cell__label")
    public List<WebElement> headersOfVahicleTable;

    @FindBy(xpath = "//span[@title='Move column']/../../td[3]/input")
    public List<WebElement> gridCheckBoxList;

   @FindBy(css="[class='fa-filter hide-text']")
   public WebElement filterIcon;

   @FindBy(css="[class='add-filter-button']")
   public WebElement manageFilterButton;

   @FindBy(xpath = "//input [@type='search']")
   public WebElement manageFilterInput;

   @FindBy(xpath = "//ul[@class='ui-multiselect-checkboxes ui-helper-reset fixed-li']/li")
   public List<WebElement> manageFilterOptions;

   @FindBy(css="a[title='Reset']")
   public WebElement resetButton;

    public WebElement getRadioButton(String filterOption){
       return Driver.get().findElement(By.cssSelector("input[title='"+filterOption+"']"));
    }
    public WebElement getCheckBoxElement(String columnName) {
        return Driver.get().findElement(By.xpath("//label[contains(text(),'" + columnName + "')]/../..//input"));
    }

    public WebElement getSortCellElement(String columnName) {
        return Driver.get().findElement(By.xpath("//label[contains(text(),'" + columnName + "')]/../../td[2]"));
    }

    public void dragAndDropGridElement(String dragElement, String dropElement) {
        initialIndexOfDrop = BrowserUtils.getElementsText(gridSettingsLabels).indexOf(dropElement);
        Actions action = new Actions(Driver.get());
        WebElement drag = getSortCellElement(dragElement);
        WebElement drop = getSortCellElement(dropElement);

        action.moveToElement(drag).clickAndHold(drag).perform();
        BrowserUtils.waitFor(1);
        action.moveToElement(drop).release(drag).perform();
    }

    public List<String> getSelectedGridCheckbox() {
        List<String> selectedCheckbox = new ArrayList<>();

        for (int i = 1; i <= gridCheckBoxList.size(); i++) {
            if (Driver.get().findElement(By.xpath("(//span[@title='Move column']/../../td[3]/input)[" + i + "]")).isSelected()) {
                selectedCheckbox.add(Driver.get().findElement(By.xpath("(//td[@class='title-cell'])[" + i + "]/label")).getText().toUpperCase(Locale.US));
            }
        }
        return selectedCheckbox;
    }

    public List<String> getHeadersOfTable() {
        List<String> headersList = new ArrayList<>();
        int listSize = Driver.get().findElements(By.xpath("//thead//a/span[@class='grid-header-cell__label']")).size();

        for (int i = 1; i <= 20; i++) {
            if (!Driver.get().findElement(By.xpath("(//span[@class='grid-header-cell__label'])[" + i + "]")).getText().equalsIgnoreCase("CVVI")) {
                headersList.add(Driver.get().findElement(By.xpath("(//span[@class='grid-header-cell__label'])[" + i + "]")).getText().toUpperCase());
            } else {
                headersList.add("CATALOG VALUE (VAT INCL.)");
            }
        }
        List<String> emptyList = new ArrayList<>(List.of(""));
        headersList.removeAll(emptyList);
        return headersList;

    }
}