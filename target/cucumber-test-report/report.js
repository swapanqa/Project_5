$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Saksfifthavenue login functionality",
  "description": "",
  "id": "saksfifthavenue-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5286970400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 306282600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 25601500900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 16412700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 479441400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5213608500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 18979000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "1. Valid user with valid password",
  "description": "",
  "id": "saksfifthavenue-login-functionality;1.-valid-user-with-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User enter user email as \"shoyel1516@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter user password as \"Aasim0619!\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "shoyel1516@gmail.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1281029800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aasim0619!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1141633400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1080133700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 3012333700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 52281600,
  "status": "passed"
});
formatter.after({
  "duration": 731168700,
  "status": "passed"
});
formatter.before({
  "duration": 3938510600,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 72109500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9266243300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 11832500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 409446900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5245318700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 38839100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "2. Valid user with valid password -Admin",
  "description": "",
  "id": "saksfifthavenue-login-functionality;2.-valid-user-with-valid-password--admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User enter user email as \"doverave@yahoo.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter user password as \"Lo0ve101!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "doverave@yahoo.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1276265600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lo0ve101!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1122085000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1036759900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 3013359200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 43379800,
  "status": "passed"
});
formatter.after({
  "duration": 754630300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User enter user email as \"\u003cEmailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enter user password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ],
      "line": 36,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;1"
    },
    {
      "cells": [
        "doverave@yahoo.com",
        "Lo0ve101!"
      ],
      "line": 37,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;2"
    },
    {
      "cells": [
        "shoyel1516@gmail.com",
        "Aasim0619!"
      ],
      "line": 38,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3888154400,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 68044900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 12181855300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 13153700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 305415900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5191147200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 14750700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User enter user email as \"doverave@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enter user password as \"Lo0ve101!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "doverave@yahoo.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1271359600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lo0ve101!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1156637100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1074323600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 3019253100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 45148600,
  "status": "passed"
});
formatter.after({
  "duration": 724560800,
  "status": "passed"
});
formatter.before({
  "duration": 3506314500,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 72205600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 8717173700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 21218100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 349142400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5029132400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 10801100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User enter user email as \"shoyel1516@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User enter user password as \"Aasim0619!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "shoyel1516@gmail.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1288476500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aasim0619!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1187554600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1066026500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 3011063900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 46871300,
  "status": "passed"
});
formatter.after({
  "duration": 739530200,
  "status": "passed"
});
formatter.uri("src/test/resources/features/ShoppingCartFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Saksfifthavenue shoppingCart Functionality",
  "description": "",
  "id": "saksfifthavenue-shoppingcart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3860129300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 61870700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 29000592400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 23096800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 410012100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 7705592500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 13155700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "1. Product Selection",
  "description": "",
  "id": "saksfifthavenue-shoppingcart-functionality;1.-product-selection",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User enter user email as \"shoyel1516@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter user password as \"Aasim0619!\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select activewear from Men Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user choose lacoste",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Then Verify the error message if user does not select color or size"
    }
  ],
  "line": 17,
  "name": "user choose small size",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on add to bag",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "shoyel1516@gmail.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1302322900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aasim0619!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1127928400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1073687400,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 8466734400,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "duration": 8169494000,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "duration": 2191367900,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "duration": 37174800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@data-reactid\u003d\u002764\u0027]\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.543627 (63642262d9fb93..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 036e4c47d0a7ae3bb9a795dc944ff80b\n*** Element info: {Using\u003dxpath, value\u003d//button[@data-reactid\u003d\u002764\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.saksfifthave.qa.framework.utils.pageObjectModel.ShoppingCartPage.customerClickAddToBag(ShoppingCartPage.java:30)\r\n\tat com.saksfifthave.qa.framework.utils.steps.IteamChoosePage.user_click_on_add_to_bag(IteamChoosePage.java:47)\r\n\tat ✽.Then user click on add to bag(src/test/resources/features/ShoppingCartFunctionality.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 745928500,
  "status": "passed"
});
formatter.before({
  "duration": 3563721700,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user borwse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "saksfifthavenue home page display",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close pop up",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Browser display Sign In page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationSteps.not_a_validated_user()"
});
formatter.result({
  "duration": 65027000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 11703101200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 9250300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 391688000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5106219200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 23772800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "2. Adding product to the cart",
  "description": "",
  "id": "saksfifthavenue-shoppingcart-functionality;2.-adding-product-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User enter user email as \"shoyel1516@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter user password as \"Aasim0619!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user select activewear from Men Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user choose lacoste",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Then Verify the error message if user does not select color or size"
    }
  ],
  "line": 28,
  "name": "user choose small size",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on add to bag",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "verify that user is in checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user should click on checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Verify whether user are able to add items to cart",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "check for edit delet or save option",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "shopping cart should contain price of the product",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "shoyel1516@gmail.com",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "duration": 1306722600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aasim0619!",
      "offset": 29
    }
  ],
  "location": "LoginPageSteps.user_enter_user_password_as(String)"
});
formatter.result({
  "duration": 1133364800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1058095000,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 7244578600,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "duration": 5278089900,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "duration": 2256484000,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "duration": 25441000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@data-reactid\u003d\u002764\u0027]\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.543627 (63642262d9fb93..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 47a1c4cd7e932bb40d404570a51d88ac\n*** Element info: {Using\u003dxpath, value\u003d//button[@data-reactid\u003d\u002764\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.saksfifthave.qa.framework.utils.pageObjectModel.ShoppingCartPage.customerClickAddToBag(ShoppingCartPage.java:30)\r\n\tat com.saksfifthave.qa.framework.utils.steps.IteamChoosePage.user_click_on_add_to_bag(IteamChoosePage.java:47)\r\n\tat ✽.Then user click on add to bag(src/test/resources/features/ShoppingCartFunctionality.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IteamChoosePage.verify_that_user_is_in_checkout_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.user_should_click_on_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.verify_whether_user_are_able_to_add_items_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.check_for_edit_delet_or_save_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.shopping_cart_should_contain_price_of_the_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 761325200,
  "status": "passed"
});
});