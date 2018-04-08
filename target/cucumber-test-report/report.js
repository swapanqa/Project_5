$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LoginFunctionality.feature");
formatter.feature({
  "line": 1,
  "name": "Saksfifthavenue login functionality",
  "description": "",
  "id": "saksfifthavenue-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5105392100,
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
  "duration": 283450800,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 10921102700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 57364600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 685269500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5888927800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 18062400,
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
  "duration": 1334347900,
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
  "duration": 1185873100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1080934200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6027354700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 9003500,
  "status": "passed"
});
formatter.after({
  "duration": 873756300,
  "status": "passed"
});
formatter.before({
  "duration": 3655850100,
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
  "duration": 119114500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 10224428200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 57416600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 562069600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5428130600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 27607700,
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
  "duration": 1411330000,
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
  "duration": 1215744000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1071300400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6028125400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 13471300,
  "status": "passed"
});
formatter.after({
  "duration": 904424800,
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
  "duration": 3585513600,
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
  "duration": 102874200,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 12399973600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 17337500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 406432600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5910982300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 17834300,
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
  "duration": 1337916300,
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
  "duration": 1167616500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1068385100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6020590200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 12346400,
  "status": "passed"
});
formatter.after({
  "duration": 898281300,
  "status": "passed"
});
formatter.before({
  "duration": 6646701100,
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
  "duration": 123997500,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9303933300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 13887300,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 341764400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5567592900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 21614700,
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
  "duration": 1313371600,
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
  "duration": 1160651400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1088983500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.home_page_should_display()"
});
formatter.result({
  "duration": 6026990500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.welcome_message_display()"
});
formatter.result({
  "duration": 10364700,
  "status": "passed"
});
formatter.after({
  "duration": 922628100,
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
  "duration": 3602371800,
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
  "duration": 125446700,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 9595072400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 17636100,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 417935300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5471132900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 22196400,
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
  "duration": 1363498300,
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
  "duration": 1154165800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1093949800,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 8457560600,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "duration": 7065782000,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "duration": 415384000,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "duration": 4214861200,
  "status": "passed"
});
formatter.after({
  "duration": 976454500,
  "status": "passed"
});
formatter.before({
  "duration": 3632292400,
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
  "duration": 110417600,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_borwse_to_the_site()"
});
formatter.result({
  "duration": 10004285900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.saksfifthavenue_home_page_display()"
});
formatter.result({
  "duration": 19898000,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationSteps.user_close_pop_up()"
});
formatter.result({
  "duration": 376334100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_Sign_In_link()"
});
formatter.result({
  "duration": 5601941200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.browser_display_Sign_In_page()"
});
formatter.result({
  "duration": 34803800,
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
  "duration": 1486036100,
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
  "duration": 1151136200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_click_SIGN_IN_button()"
});
formatter.result({
  "duration": 1086374300,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_Men_Tabs()"
});
formatter.result({
  "duration": 8119926500,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_lacoste()"
});
formatter.result({
  "duration": 5611026900,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_choose_medium_size()"
});
formatter.result({
  "duration": 483484500,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_click_on_add_to_bag()"
});
formatter.result({
  "duration": 4211496400,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.verify_that_user_is_in_checkout_page()"
});
formatter.result({
  "duration": 68716400,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.user_should_click_on_checkout()"
});
formatter.result({
  "duration": 4810771400,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.verify_whether_user_are_able_to_add_items_to_cart()"
});
formatter.result({
  "duration": 23477300,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.check_for_edit_delet_or_save_option()"
});
formatter.result({
  "duration": 32121500,
  "status": "passed"
});
formatter.match({
  "location": "IteamChoosePage.shopping_cart_should_contain_price_of_the_product()"
});
formatter.result({
  "duration": 33206100,
  "status": "passed"
});
formatter.after({
  "duration": 962793400,
  "status": "passed"
});
});