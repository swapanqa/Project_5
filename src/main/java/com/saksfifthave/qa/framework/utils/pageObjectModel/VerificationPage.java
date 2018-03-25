package com.saksfifthave.qa.framework.utils.pageObjectModel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.hamcrest.CoreMatchers.startsWith;
import static org.hamcrest.MatcherAssert.assertThat;

public class VerificationPage extends PageBase {

    public void verifyBeforeSignIn(){
        String title = driver.getTitle();
        Assert.assertEquals("Designer Women's Apparel, Men's Apparel, Shoes & Handbags - Saks.com", title);

    }
    public void verifyClickingSignIn(){

        String title = driver.getTitle();
        Assert.assertEquals("Saks.com",title);
        // Assert.assertEquals("Saks.com: Designer Women's Apparel, Men's Apparel, Shoes and Handbags, Beauty and More", title);
        delayFor(3000);
    }
    public void verifyAfterSignIn(){
        WebElement loginSuccessLabel = driver.findElement((By.xpath(".//div[contains(text(),'Welcome')]")));
        String successText = loginSuccessLabel.getText();
        //Assert.assertEquals("Welcome, Shahjalal", successText);
        assertThat(successText,startsWith("Welcome"));

    }
}
