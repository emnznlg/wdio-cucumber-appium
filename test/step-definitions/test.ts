import { When } from "@wdio/cucumber-framework";

When(/^wait please$/, async function () {
  await $("~Accessibility").click();
  await browser.pause(5000);
});
