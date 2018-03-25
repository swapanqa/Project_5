package com.saksfifthave.qa.framework.utils.pageObjectModel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import static org.hamcrest.CoreMatchers.startsWith;
import static org.hamcrest.MatcherAssert.assertThat;

public class SignInPage extends PageBase {

   /* @FindBy(how = How.ID, using = "sign-into-account-email-field")
    private WebElement emailTextBox;

    @FindBy(how = How.ID, using = "sign-into-account-password-field")
    private WebElement passwordTextBox;

    @FindBy(how = How.XPATH, using = "//button[contains(@class,'sign-into-account')]")
    private WebElement signInButton;

    @FindBy(xpath = ".//div[contains(text(),'Welcome')]")
    private WebElement welcomeMessage;

    public SignInPage() {
        super();
        PageFactory.initElements(driver,this);
    }
    public void signIN(String email, String password){
        typeText(emailTextBox,email);
        typeText(passwordTextBox,password);
        click(signInButton);
    }
    public void verifySignInSuccess(){

        String successText = welcomeMessage.getText();
        //Assert.assertEquals("Welcome, Shahjalal", successText);
        assertThat(successText,startsWith("Welcome"));

    }*/
   public void browserDisplaySignIn(){
       String title = driver.getTitle();
       Assert.assertEquals("Saks.com", title);
   }
   public void userClickSignInLink(){
       click(By.xpath(".//*[@id='toolbar']/li[1]/a/span"));
   }
   public void userEnterEmail(String email){
       typeText(By.id("sign-into-account-email-field"), email);
   }
   public void userEnterPassword(String password){
       typeText(By.id("sign-into-account-password-field"), password);
   }
   public void userClickSignIn(){
       click(By.xpath("//button[contains(@class,'sign-into-account')]"));

   }
}
