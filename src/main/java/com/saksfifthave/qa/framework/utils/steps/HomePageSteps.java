package com.saksfifthave.qa.framework.utils.steps;

import com.saksfifthave.qa.framework.utils.pageObjectModel.VerificationPage;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.hamcrest.CoreMatchers.startsWith;
import static org.hamcrest.MatcherAssert.assertThat;

public class HomePageSteps extends StepBase {
    VerificationPage verify = new VerificationPage();
    @Then("^saksfifthavenue home page display$")
    public void saksfifthavenue_home_page_display() throws Throwable {
       /* String title = driver.getTitle();
        Assert.assertEquals("Designer Women's Apparel, Men's Apparel, Shoes & Handbags - Saks.com", title);*/
       verify.verifyBeforeSignIn();



    }
    @Then("^Home page should display$")
    public void home_page_should_display() throws Throwable {
        /*String title = driver.getTitle();
        Assert.assertEquals("Saks.com",title);
       // Assert.assertEquals("Saks.com: Designer Women's Apparel, Men's Apparel, Shoes and Handbags, Beauty and More", title);
        delayFor(3000);*/
        verify.verifyClickingSignIn();
    }

    @Then("^Welcome message display$")
    public void welcome_message_display() throws Throwable {

        /* WebElement loginSuccessLabel = driver.findElement((By.xpath(".//div[contains(text(),'Welcome')]")));
        String successText = loginSuccessLabel.getText();
        //Assert.assertEquals("Welcome, Shahjalal", successText);
        assertThat(successText,startsWith("Welcome"));*/
        verify.verifyAfterSignIn();

    }
}
