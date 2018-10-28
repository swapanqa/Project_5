$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Saksfifthavenue login functionality",
  "description": "",
  "id": "saksfifthavenue-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6346922200,
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
  "duration": 216956801,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9076500800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 44841000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 348708900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 4708504300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 25913500,
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
  "duration": 1326022300,
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
  "duration": 1173860100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1074216300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6020937100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 10776400,
  "status": "passed"
});
formatter.after({
  "duration": 936324400,
  "status": "passed"
});
formatter.before({
  "duration": 3800873300,
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
  "duration": 40559500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9048970200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 32796000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 612677300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5084321400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 34926900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "2. Valid user with valid password -Admin",
  "description": "",
  "id": "saksfifthavenue-login-functionality;2.-valid-user-with-valid-password--admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User enter user email as \"doverave@yahoo.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enter user password as \"Lo0ve101!\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
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
  "duration": 1371748100,
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
  "duration": 1157160700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1075511300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6020087900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 8668700,
  "status": "passed"
});
formatter.after({
  "duration": 942972900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User enter user email as \"\u003cEmailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enter user password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Welcome message display",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ],
      "line": 37,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;1"
    },
    {
      "cells": [
        "doverave@yahoo.com",
        "Lo0ve101!"
      ],
      "line": 38,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;2"
    },
    {
      "cells": [
        "shoyel1516@gmail.com",
        "Aasim0619!"
      ],
      "line": 39,
      "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3716009300,
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
  "duration": 36731200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9024266500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 14351600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 386620000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 4995083600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 61639900,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User enter user email as \"doverave@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enter user password as \"Lo0ve101!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
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
  "duration": 1387895400,
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
  "duration": 1150000700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1053318000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6024827300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 10505500,
  "status": "passed"
});
formatter.after({
  "duration": 1025495300,
  "status": "passed"
});
formatter.before({
  "duration": 3683464300,
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
  "duration": 37235900,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9047461200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 51995500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 380428000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5933982900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 68310300,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "3. Valid user with valid password -Data Driven",
  "description": "",
  "id": "saksfifthavenue-login-functionality;3.-valid-user-with-valid-password--data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "User enter user email as \"shoyel1516@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User enter user password as \"Aasim0619!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click SIGN IN button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
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
  "duration": 1393244000,
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
  "duration": 1166294900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1066181600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6019911700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 10299600,
  "status": "passed"
});
formatter.after({
  "duration": 967875500,
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
  "duration": 3623350600,
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
  "duration": 36363800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9151993900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 22211200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 338191400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5402515400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 68075200,
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
  "duration": 1432937200,
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
  "duration": 1176299400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1064398800,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 3290532200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@href, \u0027/Men/Apparel/Activewear\u0027)]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50161}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 3e8483c1abb0228e4eae9bab9ce4c5ac\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@href, \u0027/Men/Apparel/Activewear\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.saksfifthave.qa.framework.utils.pageObjectModel.ShoppingCartPage.customerSelectActivewear(ShoppingCartPage.java:17)\r\n\tat com.saksfifthave.qa.framework.utils.steps.IteamChoosePage.user_click_on_Men_Tabs(IteamChoosePage.java:23)\r\n\tat ✽.Then user select activewear from Men Menu(src/test/resources/features/ShoppingCartFunctionality.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 994652500,
  "status": "passed"
});
formatter.before({
  "duration": 3650956400,
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
  "duration": 30399800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 8975014400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 24684200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 324897200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5739756500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 68533200,
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
  "duration": 1388200700,
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
  "duration": 1152211000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1060825700,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 3263943500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@href, \u0027/Men/Apparel/Activewear\u0027)]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027SHIFT-PC01\u0027, ip: \u0027192.168.1.158\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\SHIFTS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50366}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: a00d57ec72663312213a26bc6361c77e\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@href, \u0027/Men/Apparel/Activewear\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.saksfifthave.qa.framework.utils.pageObjectModel.ShoppingCartPage.customerSelectActivewear(ShoppingCartPage.java:17)\r\n\tat com.saksfifthave.qa.framework.utils.steps.IteamChoosePage.user_click_on_Men_Tabs(IteamChoosePage.java:23)\r\n\tat ✽.Then user select activewear from Men Menu(src/test/resources/features/ShoppingCartFunctionality.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 1039873000,
  "status": "passed"
});
});