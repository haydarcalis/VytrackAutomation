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
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
public class LoginStepDefinition {
    LoginPage loginPage=new LoginPage();

    @Given("The user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("The user login using {string} and {string}")
    public void theUserLoginUsingAnd(String username, String password) {

        loginPage.userName.sendKeys(username);
        loginPage.password.sendKeys(password);
        loginPage.submit.click();
    }
    @Then("The user should see {string}")
    public void the_user_should_see(String expectedTitle) {
        BrowserUtils.waitFor(5);
        String actualTitle=Driver.get().getTitle();
        Assert.assertEquals(expectedTitle,actualTitle);
    }
    @When("The user login using invalid {string} or {string}")
    public void the_user_login_using_invalid_or(String usernameInput, String passwordInput) {
        loginPage.login(usernameInput,passwordInput);
    }
    @Then("The user should see error {string}")
    public void theUserShouldSeeError(String expectedMessage) {
        BrowserUtils.waitFor(5);
        String actualMessage=loginPage.invalidMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);
    }
    @When("The user login using empty {string} or {string}")
    public void the_user_login_using_empty_or(String usernamebox, String passwordbox) {
        loginPage.login(usernamebox,passwordbox);
    }

    @Then("The user should see inputError{string}")
    public void theUserShouldSeeInputError(String expectedmessage) {
        BrowserUtils.waitForVisibility(new LoginPage().userName,10);
        String actualMessageEmptyPassword = loginPage.password.getAttribute("validationMessage");
        String actualMessageEmptyUsername=loginPage.userName.getAttribute("validationMessage");

        if (loginPage.userName.getAttribute("required").isEmpty()) {
            Assert.assertEquals("Verify that : User should see the error message", expectedmessage, actualMessageEmptyUsername);
        } else if (loginPage.password.getAttribute("required").isEmpty()) {
            Assert.assertEquals("Verify that : User should see the error message", expectedmessage,actualMessageEmptyPassword);
        }
    }
    @When("The user clicks on the Forgot your password link")
    public void the_user_clicks_on_the_Forgot_your_password_link() {
        loginPage.forgotPassword.click();
    }

    @Then("The user navigates to the Forgot Password page")
    public void the_user_navigates_to_the_Forgot_Password_page() {
        String expectedTitle="Forgot Password";
        String actualTitle=Driver.get().getTitle();
        Assert.assertEquals(expectedTitle,actualTitle);
    }

    @Then("The user can see Remember Me link exists and is clickable")
    public void theUserCanSeeRememberMeLinkExistsAndIsClickable() {
        loginPage.rememberMeElement.isDisplayed();
        loginPage.rememberMeElement.isEnabled();
    }
    @When("The user login using {string} and {string} with keyboard enter key")
    public void the_user_login_using_and_with_keyboard_enter_key(String username, String password) {
        loginPage.userName.sendKeys(username);
        loginPage.password.sendKeys(password,Keys.ENTER);

    }
    @When("The user enters password")
    public void the_user_enters_password() {
        loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));
    }

    @Then("The user should see the password in bullet signs by default")
    public void the_user_should_see_the_password_in_bullet_signs_by_default() {
        WebElement password = loginPage.password;
        String attribute = password.getAttribute("type");
        boolean isEncrypted = password.getAttribute("type").equals("password");
       Assert.assertTrue("Verify that the password is in bullet signs",isEncrypted);
    }

    @Then("The user should see user{string}")
    public void theUserShouldSeeUser(String profileName) {
       BrowserUtils.waitFor(5);
        Assert.assertEquals(profileName,loginPage.getUserName());
    }
}
