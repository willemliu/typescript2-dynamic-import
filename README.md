# typescript2-dynamic-import
Example of how to do dynamic import of a module in TypeScript 2.4+.
When running the example the following happens:
1. `es6-promise` auto-polyfill JavaScript library is loaded.
1. RequireJS is loaded from a CDN
1. RequireJS loads `main.js`
1. `main.js` dynamically imports `module.js`
1. `module.js` is run and a function is called which results in some text showing on the page.

## Build the example
1. Install `npm`
1. Run `npm install`
1. Run `npm run build`

OR 

1. Install `yarn`
1. Run `yarn`
1. Run `yarn build`

## Run the example
* Have a webserver serve all files from the example

OR

* I personally use `local-web-server` to serve the example.
All you have to do is install `local-web-server` globally with npm: 
`npm install local-web-server -g`.
After installation you can run `ws` in the root of the project.
