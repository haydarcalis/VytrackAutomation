package com.vytrack.pages;

import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage{

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id="prependedInput")
    public WebElement userName;

    @FindBy(id="prependedInput2")
    public WebElement password;

    @FindBy(name = "_submit")
    public WebElement submit;

    @FindBy(xpath = "//div[contains(text(), 'Invalid user name or password.')]")
    public WebElement invalidMessage;

    @FindBy(linkText = "Forgot your password?")
    public WebElement forgotPassword;

    @FindBy(className = "custom-checkbox__icon")
    public WebElement rememberMeElement;

    @FindBy(tagName = "h2")
    public WebElement titleElement;

    public void loginAsDriver(){
        LoginPage loginPage=new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
        loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));
        loginPage.submit.click();
    }
    public void loginAsSalesmanager(){
        LoginPage loginPage=new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("salesmanager_username"));
        loginPage.password.sendKeys(ConfigurationReader.get("salesmanager_password"));
        loginPage.submit.click();
    }
    public void loginAsStoreManager(){
        LoginPage loginPage=new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("storemanager_username"));
        loginPage.password.sendKeys(ConfigurationReader.get("storemanager_password"));
        loginPage.submit.click();
    }
    public void login(String userNameStr, String passwordStr) {
        LoginPage loginPage=new LoginPage();
        loginPage.userName.sendKeys(userNameStr);
        loginPage.password.sendKeys(passwordStr);
        loginPage.submit.click();
    }
    public void loggedAs (String userType){
        Driver.get().get(ConfigurationReader.get("url"));

        String username ="";
        String password ="";

        if(userType.equals("driver")){
            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");
        }else if(userType.equals("sales manager")){
            username = ConfigurationReader.get("salesmanager_username");
            password = ConfigurationReader.get("salesmanager_password");
        }else if(userType.equals("store manager")){
            username = ConfigurationReader.get("storemanager_username");
            password = ConfigurationReader.get("storemanager_password");
        }

        new LoginPage().login(username,password);
    }

   }
