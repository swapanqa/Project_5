package com.saksfifthave.qa.framework.utils.steps;

import com.saksfifthave.qa.framework.utils.pageObjectModel.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class LoginPageSteps extends StepBase {

    SignInPage sign = new SignInPage();


    @Then("^Browser display Sign In page$")
    public void browser_display_Sign_In_page() throws Throwable {
       /* String title = driver.getTitle();
        Assert.assertEquals("Saks.com", title);*/
       sign.browserDisplaySignIn();


    }

    @When("^User click Sign In link$")
    public void user_click_Sign_In_link() throws Throwable {
      //  click(By.xpath(".//*[@id='toolbar']/li[1]/a/span"));
        sign.userClickSignInLink();
    }

    @When("^User enter user email as \"([^\"]*)\"$")
    public void user_enter_user_email_as(String email) throws Throwable {
        //typeText(By.id("sign-into-account-email-field"), email);
        sign.userEnterEmail(email);

    }

    @When("^User enter user password as \"([^\"]*)\"$")
    public void user_enter_user_password_as(String password) throws Throwable {
       // typeText(By.id("sign-into-account-password-field"), password);
        sign.userEnterPassword(password);
    }

    @And("^user click SIGN IN button$")
    public void user_click_SIGN_IN_button() throws Throwable {
      //  click(By.xpath("//button[contains(@class,'sign-into-account')]"));
        sign.userClickSignIn();
    }
}




