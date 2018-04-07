package functional;

import com.saksfifthave.qa.framework.utils.scriptbase.SaksFifthaveScriptBaseJUnit;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

@RunWith(Parameterized.class)
public class SaksFifthLoginFunctionality extends SaksFifthaveScriptBaseJUnit {

    @Test
    public void loginFunctionality() {
        homePage.notAValidUser();
        homePage.browseToSite();
        verify.verifyBeforeSignIn();
        homePage.iframeHome();
        sign.userClickSignInLink();
        sign.userEnterEmail("shoyel1516@gmail.com");
        sign.userEnterPassword("Aasim0619!");
        sign.userClickSignIn();
        verify.verifyClickingSignIn();
       // verify.verifyAfterSignIn();
    }
   /* @Test
    public void loginFunctionality2() {
        homePage.notAValidUser();
        homePage.browseToSite();
        verify.verifyBeforeSignIn();
        homePage.iframeHome();
        sign.userClickSignInLink();
        sign.userEnterEmail("doverave@yahoo.com");
        sign.userEnterPassword("Lo0ve101!");
        sign.userClickSignIn();
        verify.verifyClickingSignIn();
       // verify.verifyAfterSignIn();
    }
    @Test
    public void shoppingCartFunctionality(){
        homePage.notAValidUser();
        homePage.browseToSite();
        verify.verifyBeforeSignIn();
        homePage.iframeHome();
        sign.userClickSignInLink();
        sign.userEnterEmail("shoyel1516@gmail.com");
        sign.userEnterPassword("Aasim0619!");
        sign.userClickSignIn();
        verify.verifyClickingSignIn();
      //  verify.verifyAfterSignIn();
        cart.customerSelectActivewear();
        cart.customerSelectLacoste();
        cart.customerSelectSmallSize();
        cart.customerClickAddToBag();

    }*/



}
