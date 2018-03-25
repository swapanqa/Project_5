package com.saksfifthave.qa.framework.utils.pageObjectModel;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class ShoppingCartPage extends PageBase {

    public void customerSelectActivewear(){
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//span[contains(@class,'highlight')and text()='MEN']"))).perform();
        delayFor(3000);

        WebElement subElement= driver.findElement(By.xpath("//a[contains(@href, '/Men/Apparel/Activewear')]"));
        action.moveToElement(subElement).click().perform();

    }
    public void customerSelectLacoste(){
        driver.findElement(By.xpath("//p[@productcode='0400097500294']/span[text() = 'Lacoste']")).click();

    }
    public void customerSelectSmallSize(){
        driver.findElement(By.xpath("//span[text()='SMALL']")).click();

    }
    public void customerClickAddToBag(){
        driver.findElement(By.xpath("//button[@data-reactid='64']")).click();
        delayFor(2000);

    }
    public void verifyCustomerWereAbleToAddItem(){
        String Tittle= driver.getTitle();
        Assert.assertEquals("Saks.com",Tittle);

    }
    public void customerClickOnCheckout(){
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//span[contains(text(),'CHECKOUT')]")).click();
    }
    public void verifyCustomerIsInCheckoutPage(){
        String title= driver.getTitle();
        Assert.assertTrue(title.toLowerCase().contains("saks.com"));

    }
    public void customerSelectEditOptions(){
        driver.findElement(By.xpath("//span[text()='Edit']"));
    }
    public void shoppingCartShouldContainsPrice(){
        driver.findElement(By.xpath("//span[contains(@class,'unit-price')]"));

    }
}
