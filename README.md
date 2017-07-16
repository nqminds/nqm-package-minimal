# nqm-package-minimal

Skeleton for a minimal universal JS package.

This framework allows you to write code for use in both nodejs and browser environments. It is also
useful if you like writing ES6-style code but are tied to a nodejs version that doesn't fully
support all the features.

## configure

Create a new repo for your package in github. Make sure you adhere to the nqminds naming conventions.
The following examples will use the repo `nqm-careshare-api-carer` - the repo url will be [https://github.com/nqminds/nqm-careshare-api-carer](#).

Clone this repo and change into the directory. Note that the repo is cloned into the target folder name.

```
git clone https://github.com/nqminds/nqm-package-minimal nqm-careshare-api-carer
cd nqm-careshare-api-carer
```

Change the git remote origin to the target repo to point to your target package.

```
git remote set-url origin https://github.com/nqminds/nqm-careshare-api-carer
```

- change the following fields in `package.json` to reflect your package name
  - name
  - description
  - repository.url
  - bugs.url
  - homepage  
- change the following fields in `webpack.config.js` to reflect your package name
  - libraryName

## install

```
npm install
```

## code

Fire up a background terminal and run

```
npm run dev
```

Write your code, placing it in the `src` folder. While developing, `npm run dev` will watch the `src` folder for changes and re-build the package automatically, while also checking
for `eslint` errors.

## test

Write tests in the `test` folder.

```
npm run test
```

You should also be able to debug using the 'mocha tests' configuration in vscode.

## deploy

Once you have built and tested your package, you can build it for production using:

```
npm run build
```

If necessary you can also now publish the package to the npm registry. 