const isCI = () => process.env.CI && process.env.CI === 'true';

/**
 * To learn more about the protractor.conf.js check out:
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 */
exports.config = {

    baseUrl: 'http://localhost:4000/',

    directConnect: true,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    // Load Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [ '../web-components/src/components/**/*.feature' ],

    cucumberOpts: {
        require:    [ '../web-components/src/**/*.cucumber.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register',
        tags:       [ '~@wip' ]
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                // '--headless',
                // '--disable-gpu',
                '--window-size=800,600'
            ].

            // Required on Travis CI when running the build without sudo
            // https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai#running_it_all_on_travis_ci
            concat(isCI() ? ['--no-sandbox'] : [])
        }
    },

    onPrepare() {
        browser.ignoreSynchronization = true;
    }
};
