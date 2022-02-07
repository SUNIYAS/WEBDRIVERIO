import { Given, Then } from '@wdio/cucumber-framework';
//declare var $: any;


Given(/^I open the browser and load the url(.+)$/, async function (homepageurl) {
  await browser.url(homepageurl)
  await browser.pause(5000)
  await browser.maximizeWindow();
  await browser.pause(5000)

});
Then(/^I should see a header with text (.+)$/, async function (headertext) {
  const header = await $('.main-header');
  expect(await header.getText()).toEqual(headertext);
});