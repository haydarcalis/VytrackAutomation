package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
    LoginPage loginPage=new LoginPage();

    @Given("The user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("The user enters username and password and click login button")
    public void the_user_enters_username_and_password_and_click_login_button() {

        //LoginPage loginPage=new LoginPage();
    //1.Yol LoginPage.java daki metodu kullanmadan girdik.
//        loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
//        loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));
//        loginPage.submit.click();

        //2.Yol
        String username = ConfigurationReader.get("driver_username");
        String password = ConfigurationReader.get("driver_password");

        loginPage.login(username,password);

    }

    @Then("The user should be able to login")
    public void the_user_should_be_able_to_login() {

        BrowserUtils.waitFor(2);
        String expectedTitle="Dashboard";
        String actualTitle=Driver.get().getTitle();
        Assert.assertEquals(expectedTitle,actualTitle);

    }
    @When("The user enters sales manager username and password and click login button")
    public void theUserEntersSalesManagerUsernameAndPasswordAndClickLoginButton() {

        loginPage.loginAsSalesmanager();//LoginPage.javadaki metottan geliyor.

//        loginPage.userName.sendKeys(ConfigurationReader.get("salesmanager_username"));
//        loginPage.password.sendKeys(ConfigurationReader.get("salesmanager_password"));
//        loginPage.submit.click();
    }

    @When("The user enters store manager username and password and click login button")
    public void theUserEntersStoreManagerUsernameAndPasswordAndClickLoginButton() {

        loginPage.userName.sendKeys(ConfigurationReader.get("storemanager_username"));
        loginPage.password.sendKeys(ConfigurationReader.get("storemanager_password"));
        loginPage.submit.click();
    }

    @When("The user login using {string} and {string}")
    public void theUserLoginUsingAnd(String username, String password) {

        loginPage.userName.sendKeys(username);
        loginPage.password.sendKeys(password);
        loginPage.submit.click();

    }

    @And("The title contains {string}")
    public void theTitleContains(String expectedTitle) {
        BrowserUtils.waitFor(5);
        String actualTitle=Driver.get().getTitle();
        Assert.assertTrue(actualTitle.contains(expectedTitle));

    }
}
