# Playwright
Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.
Foobar is a Python library for dealing with word pluralization.

## Installation

Install the [VS Code extension from the marketplace](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) or from the extensions tab in VS Code.

Once installed, open the command panel and type:
```bash
Install Playwright
```

Select 
```bash
Test: Install Playwright 
```

and Choose the browsers you would like to run your tests on. These can be later configured in the playwright.config file. You can also choose if you would like to have a GitHub Actions setup to run your tests on CI.

If you open the existent project with 
```bash
node_modules 
```

folder present - delete it before running

```bash
Test: Install Playwright 
```

## Running Tests
You can run a single test by clicking the green triangle next to your test block to run your test. Playwright will run through each line of the test and when it finishes you will see a green tick next to your test block as well as the time it took to run the test.

## Run Tests and Show Browsers
You can also run your tests and show the browsers by selecting the option Show Browsers in the testing sidebar. Then when you click the green triangle to run your test the browser will open and you will visually see it run through your test. Leave this selected if you want browsers open for all your tests or uncheck it if you prefer your tests to run in headless mode with no browser open.

## Run Tests on Specific Browsers

The VS Code test runner runs your tests on the default browser of Chrome. To run on other/multiple browsers click the play button's dropdown and choose another profile or modify the default profile by clicking Select Default Profile and select the browsers you wish to run your tests on.

## Reference

[Playwright VS Code docs](https://playwright.dev/docs/getting-started-vscode)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)