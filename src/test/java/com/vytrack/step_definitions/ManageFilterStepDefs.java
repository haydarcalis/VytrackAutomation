package com.vytrack.step_definitions;

import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.GridPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.List;

public class ManageFilterStepDefs {

    GridPage gridPage = new GridPage();

    @When("The user logged in as {string}")
    public void The_user_logged_in_as(String userType) {
        new LoginPage().loggedAs(userType);
    }

    @And("The user navigates to {string} {string}")
    public void The_user_navigates_to(String tab, String module) {

        BrowserUtils.waitFor(3);
        DashboardPage dashboardPage = new DashboardPage();
        dashboardPage.navigateToModule(tab, module);
    }

    @And("The user clicks on filterIcon")
    public void theUserClicksOnFilterIcon() {
        BrowserUtils.waitForClickablility(gridPage.filterIcon, 10);
        gridPage.filterIcon.click();
    }

    @Then("The user should see Manage Filter button became visible")
    public void the_user_should_see_Manage_Filter_button_became_visible() {

        Assert.assertTrue("Verify Manage Filter button became visible", gridPage.manageFilterButton.isDisplayed());
    }

    @When("The user clicks on Manage Filter Menu")
    public void the_user_clicks_on_Manage_Filter_Menu() {
        gridPage.manageFilterButton.click();
    }

    @Then("The user should see the following Manage Filter options")
    public void the_user_should_see_the_following_Manage_Filter_options(List<String> expectedManageFilterOptions) {

        List<String> actualManageFilterOptions = BrowserUtils.getElementsText(gridPage.manageFilterOptions);
        Assert.assertEquals(expectedManageFilterOptions, actualManageFilterOptions);
    }

    @Then("The user can select the filter name by clicking from the Manage filters menu")
    public void the_user_can_select_the_filter_name_by_clicking_from_the_Manage_filters_menu() {

        if (!gridPage.getRadioButton("Tags").isSelected()) {
            gridPage.getRadioButton("Tags").click();
        }
        Assert.assertTrue(gridPage.getRadioButton("Tags").isSelected());
    }

    @Then("The user can select the filter name by typing from the Manage filters menu")
    public void the_user_can_select_the_filter_name_by_typing_from_the_Manage_filters_menu() {
        gridPage.manageFilterInput.sendKeys("Tags");
        BrowserUtils.waitFor(3);
        List<String> filterOptions = BrowserUtils.getElementsText(gridPage.manageFilterOptions);
        int indexOfTags = filterOptions.indexOf("Tags");

        String typedFilter = filterOptions.get(indexOfTags);

        Assert.assertTrue("Tags".equalsIgnoreCase(typedFilter));
        Assert.assertEquals("Verify filter name by typing", typedFilter, "Tags");

    }

    @Then("The user can select multiple filters at the same time from the Manage filters menu")
    public void the_user_can_select_multiple_filters_at_the_same_time_from_the_Manage_filters_menu() {

        List<String> filterOptions = BrowserUtils.getElementsText(gridPage.manageFilterOptions);

        for (int i = 1; i < filterOptions.size(); i++) {
            Driver.get().findElement(By.xpath("(//input[@title])[" + i + "]")).click();
            BrowserUtils.waitFor(3);
            boolean selected = Driver.get().findElement(By.xpath("(//input[@title])[" + i + "]")).isSelected();
            Assert.assertTrue("Verify all filters are selected", selected);
        }

    }

    @Then("The user clicks on the Reset icon")
    public void the_user_clicks_on_the_Reset_icon() {
        gridPage.resetButton.click();
    }

    @Then("The user can remove all filters by clicking on the reset icon")
    public void the_user_can_remove_all_filters_by_clicking_on_the_reset_icon() {
        List<String> filterOptions = BrowserUtils.getElementsText(gridPage.manageFilterOptions);
        for (int i = 1; i < filterOptions.size(); i++) {
            boolean selected = Driver.get().findElement(By.xpath("(//input[@title])[" + i + "]")).isSelected();
            Assert.assertFalse("Verify all filters are selected", selected);
        }
    }
}
