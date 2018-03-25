package com.saksfifthave.qa.framework.utils.pageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends PageBase {

    @FindBy(how = How.XPATH, using =".//*[@id='toolbar']/li[1]/a/span" )
    private WebElement signInLink;

/*    public HomePage(){
        super();
        PageFactory.initElements(driver,this);

    }*/

    public void notAValidUser(){
        driver.manage().deleteAllCookies();
    }
    public void browseToSite(){
        driver.navigate().to("https://www.saksfifthavenue.com/Entry.jsp");
    }

    public void navigateToSignInPage(){
        signInLink.click();
    }
    public void iframeHome(){
        WebElement popupDialougeBox = null;

        try {

            popupDialougeBox = driver.findElement(By.xpath(".//*[@id='generic-modal']"));
            System.out.println("Found");

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }

        if (popupDialougeBox != null) {

            WebElement emailPopUpContainerIframe = popupDialougeBox.findElement(By.xpath("./iframe"));
            driver.switchTo().frame(emailPopUpContainerIframe);
            System.out.println("Switched");

            WebElement closeButton = driver.findElement(By.xpath("//div[@id='close-button']"));
            closeButton.click();
        }

        delayFor(30);
    }


}
