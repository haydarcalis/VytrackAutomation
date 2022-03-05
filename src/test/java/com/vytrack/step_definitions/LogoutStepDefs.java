package com.vytrack.step_definitions;

import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import java.util.ArrayList;

public class LogoutStepDefs {
   LoginPage loginPage=new LoginPage();
//    @When("The user log out")
//    public void the_user_log_out() {
//
//        }
//
//    @Then("The user should see title {string}")
//    public void the_user_should_see_title(String expectedTitle) {
//        String actualTitle= Driver.get().getTitle();
//        Assert.assertEquals(expectedTitle,actualTitle);
//    }
//
//    @Then("The user clicks step back button")
//    public void the_user_clicks_step_back_button() {
//      Driver.get().navigate().back();
//    }
//
//    @When("The user closes the open tab")
//    public void the_user_closes_the_open_tab() {
//
//        Driver.closeDriver();

//        JavascriptExecutor js=(JavascriptExecutor)Driver.get();
//        ((JavascriptExecutor) Driver.get()).executeScript("window.open()");
//        ArrayList<String> tabs = new ArrayList<String>(Driver.get().getWindowHandles());
//        Driver.get().switchTo().window(tabs.get(1));
//        BrowserUtils.waitForPageToLoad(3);}

   @When("The user logs out")
   public void the_user_logs_out() {
      BrowserUtils.waitFor(5);
       loginPage.logOut();
   }

   @Then("The user should be back to the Login page")
   public void the_user_should_be_back_to_the_Login_page() {
      String expectedTitle="Login";
      String actualTitle= Driver.get().getTitle();
      Assert.assertEquals(expectedTitle,actualTitle);
   }

   @Then("The user clicks step back button")
   public void the_user_clicks_step_back_button() {
      Driver.get().navigate().back();
   }

   @Then("The user should not go back, should be on the Login page")
   public void the_user_should_not_go_back_should_be_on_the_Login_page() {
      String expectedTitle="Login";
      String actualTitle= Driver.get().getTitle();
      Assert.assertEquals(expectedTitle,actualTitle);
   }

   @When("The user closes the open tab")
   public void the_user_closes_the_open_tab() {
      JavascriptExecutor jse = (JavascriptExecutor)Driver.get();
      jse.executeScript("window.open('https://qa1.vytrack.com/')");
      ArrayList<String> tabs = new ArrayList<String>(Driver.get().getWindowHandles());
      Driver.get().close();
      Driver.get().switchTo().window(tabs.get(1));
   }

   @Then("The user should be on the Login page")
   public void the_user_should_be_on_the_Login_page() {
      BrowserUtils.waitFor(5);
      String expectedTitle="Login";
      String actualTitle= Driver.get().getTitle();
      Assert.assertEquals(expectedTitle,actualTitle);

   }

 }
