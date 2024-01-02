const {
    Given,
    When,
    Then
} = require('@cucumber/cucumber');

Given(/^I launch the application$/, async () => {
    const sdName = 'I launch the application';

    console.log(`Enter given: ${  sdName}`);
    await browser.setWindowSize(1400, 1000);
    browser.url('https://www.apple.com/');
    await browser.pause(10000);
    // await browser.pause (20000);
    // browser.refresh ();
});
When(/^I navigate to sign in page$/, async () => {
    const login = '//a[@id="globalnav-menubutton-link-bag"]';
    await $(login).waitForExist({
        timeout: 20000
    });
    await $(login).click();
    const login1 = '//*[@id="globalnav-submenu-bag"]/div/div/div/div[1]/div/div/a'
    await browser.pause(4000);
    await $(login1).click();
    await browser.pause(4000);
});
When(/^I switch to the iframe$/, async () => {
    const iframe_element = '//*[@id="aid-auth-widget-iFrame"]'
    // switch to login frame

    // wait for the element to be displayed
    await $(iframe_element).waitForExist({
        timeout: 30000
    });
    console.log('switching');
    browser.switchToFrame (await $ (iframe_element));
    browser.pause(20000);
    console.log('switched');
    browser.pause(20000);
});

Then(/^I enter the creds for signin$/, async () => {
    const email = '//input[@id="account_name_text_field"]';
    await $(email).setValue('mytestmail@mail.com');
    const submit = '//*[@id="sign-in"]'
    await $(submit).waitForExist({
        timeout: 30000
    });
    await $(submit).click();

});
Then(/^I expect to see the password field$/, async () => {
    await browser.pause(20000);
    const password = '//*[@type="password"]'
    await $(password).waitForExist({
        timeout: 30000
    });

});
