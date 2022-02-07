import { Given, Then, When } from "@cucumber/cucumber";
import LoginInfo from "../pageobjects/LoginInfo";
import Mailing from "../pageobjects/Mailing";
import registration from "../pageobjects/registration";
import report from "@wdio/allure-reporter";

Given(/^User is on Home page of new tours$/, async ()=> {
    await browser.url('https://demo.guru99.com/test/newtours/')
    await browser.maximizeWindow()
    report.addStep("maximizing window");
    await (await registration.registerlink).click()
    report.addStep("loading the link");

});

When(/^user is on registration and enters contact information$/, async ()=> {
    await (await registration.FirstName).setValue("Williamson")
    await (await registration.LastName).setValue("Kane")
    await (await registration.Phone).setValue("4567891234")
    await (await registration.Email).setValue("abcdef.xyzs@gmail.com")
    report.addStep("added my details");

});

When(/^user enters mailing information$/, async ()=> {
    await (await Mailing.Address).setValue("1-1-762,abd,efh,jkl")
    await (await Mailing.City).setValue("Anantapur")
    await (await Mailing.State).setValue("AndhraPradesh")
    await (await Mailing.country).selectByVisibleText("INDIA")
    report.addStep("added my address");

});

Then(/^user enters user information$/, async ()=> {
    await (await LoginInfo.Username).setValue("abc.xyzs@gmail.com")
    await (await LoginInfo.Password).setValue("abc@1234")
    await (await LoginInfo.ConfirmPassword).setValue("abc@1234")
    report.addStep("entering the required credentials to login");
    await (await LoginInfo.submitbtn).click()
    report.addStep("submitting registration");

});



Given(/^user is on the login page$/, async ()=> {
    await (await LoginInfo.signlink).click()
    report.addStep("loading sign on URL ");

});

When(/^user enters login details$/, async ()=> {
    await (await LoginInfo.loginname).setValue("abcdef.xyzs@gmail.com")
    await (await LoginInfo.loginpassword).setValue("abc@1234")
    await (await LoginInfo.loginbutton).click()
    report.addStep("given required credentials and clicking login btn");

    await console.log(browser.getTitle())
    report.addStep("displaying titile");

});


  



