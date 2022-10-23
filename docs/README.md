
# QUICK ORDER (custom app) 

input that will allow a quick purchase on my VTEX IO site

![image](https://user-images.githubusercontent.com/94867719/197370223-2be21dac-dd6a-4da6-86b1-a2c238778ed8.png)


## Configuration

This app is based on the react-app-template template (https://github.com/vtex-apps/react-app-template), below are the initial configuration steps:

### Step #1 - File `Manifest.json`:

Having the app's code open in your code editor, let us analyze the manifest.json file, which saves basic and essential information about the app, such as:

- `vendor` - Name of the VTEX account that develops, maintains, and distributes the app.
- `name` - App name. You choose the name, but be careful to avoid special characters (with the exception - hyphens).
- `version` - App's current version. For versioning, VTEX IO uses Semantic Versioning 2.0.0.
- `title` - App's distribution name. This name will be displayed on the `Apps` section in the admin and, also, on the VTEX App Store.
- `description` - Brief description of the app's functionality.
- `builders` - List of Builders that facilitate the app's development, abstracting service configurations.
- `dependencies` - List of apps that the app you are developing depends on for proper functioning.
At the beginning of the process, it is very important to incorporate the new app's basic information in the `manifest.json` file in order to make it your own instead of it staying another example version provided by VTEX. To do that:

1.Replace the account in the `vendor` field with the VTEX account you are using for development.
2.Replace the value in the `name` field with the name you want. Remember that the name defined in this field will be the name of your new app.
3.Replace the values in the `title` and `description` fields with something that matches the app you are developing.
4.Add the `store@0.x` builder to the builder list to allow the creation of new blocks:

```
"builders": {
+  "store": "0.x"
}
```
5.If you want to import any React components previously developed for your new app, update the `dependencies` list with the name of the app that runs the desired component, for example:

```
"dependencies": {
+  "vtex.styleguide": "9.x"
}
```
This will allow you to later import the app component added in `dependencies` into your code via the `import {componentName} from 'vtex.styleguide'` structure, for example.

### Step #2 - Installation of node-models:

To perform this installation in your terminal, you must be in the application's reat folder and launch the `yarn` command (recommended), and you will have all the necessary modules installed to use this template.

### Step #3 - Use of the application:

To use this custom app in your store, you must declare its `dependencies` in the `manifest.json` file as follows, "vendorName.componentName" : "version", for example:

```
  "dependencies": {
     "itgloberspartnercl.quick-order": "0.x",
   }
```

then just declare the property name of the custos component, in the desired place of your store to be used and it can be rendered in your store.

## Dependencies:

1."vtex.checkout-graphql": "0.x"
2."vtex.search-graphql": "0.x"


---- 
#### Note:
If you don't see your new custom app reflected, and you don't have errors in your terminal, cancel the linking process, and `link` your store again.


## Contributors ✨

Bayron A. Murieles Gonzalez
