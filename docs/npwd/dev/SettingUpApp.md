---
id: setup title: Creating applications sidebar_label: Creating applications
---

### Getting started

We have developed a module system that allows developers to create apps that can live in other resources. This makes the
process of creating framework related apps much easier, and keep NPWD as a standalone product you almost don't need to
touch.

To get started, there are a few things we need to go through.

1. Make sure you have the source code of NPWD, and have been able to build it successfully.
2. You have a basic understanding of React, Vue or other web lib/frameworks.

### Setup

Before we can start, we have to download or clone the app template which you can
find [here](https://github.com/project-error/npwd-app-template).
:::tip We recommend renaming the app resource with a prefix. Such as `npwd_appname` or `npwd_framework_appname`. DO NOT
USE `-` as a separator.
:::
Then install all dependencies by running `yarn install` in the root of the app resource.

#### App configuration

Before we can get started with developing the app, we should configure our app.

In `npwd.config.ts` you'll find some a basic config you can change. Most of these are self-explanatory, but we'll go
through some of them.

```ts
export default (settings: Settings) => ({
	// ...
	id: 'APP_NAME',
	nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
	icon: AppIcon,
	app: App,
});
```

- `id`: The ID of the app which is mostly used for NUI messages and translation.
- `nameLocale`: This is the current language selected from the phone. You shouldn't need to change this.
- `icon`: The app icon used on the home screen and for notifications
- `app`: This is the DOM element which will be rendered when we navigate to the `path` set in the config.

#### Module federation configuration

This is a simple, but important step.

Navigate to `webpack.config.js` and find `plugins` where you'll see something like this.

```js
// ...
new ModuleFederationPlugin({
	name: 'template',
// ...
```

Change the `name` to the resource name of the app. This will help NPWD locating your app.

### NPWD

Now that we have set up the app, we have to add the app to NPWD. You'll find a file called `config.apps.js`. If you
haven't done any changes, it should look like this

```js
module.exports = {
	/*template: () => {
      return import('template/config');
    },*/
};
```

The reason we have to set the resource name as `name` in the `Module federation` plugin, is because we get the necassary
files from the resource iframe. So here we can just replace `template` both places with the `resource name` of the app.

```js
module.exports = {
	resourcename: () => {
		return import('resourcename/config');
	}
};
```

If you want more apps, you follow the same steps. Create a new property in the object, and return an import of the
config.

### Development

Now, you can start developing your billion dollar app idea. To see the app in-browser, run `yarn dev` in
the `app resource`.

Alternatively, you run `yarn start` in `npwd/phone` to see the app inside NPWD in-browser.

#### Useful hooks and functions

While developing, there are a few things to keep in mind. Sending NUI messages are with `SendNUIMessage` will not work.
We have therefore created a client-side export `sendUIMessage` from NPWD. You can read more about
that [here](https://projecterror.dev/docs/npwd/api/client-exports).

We can intercept these NUI message with the `useNuiEvent` hook, and use the data returned.

```ts
const { data } = useNuiEvent<T>({ event: 'RANDOM' });
```

If you want to fetch data from the client via NUI, you can utilise the `fetchNui` function. This works like a normal
POST req, and requires `RegisterNUICallback` on the client-side. Then use the callback provided by `RegisterNUICallback`
to a send response back.

## Build

When you're ready to build the app for use in-game, run `yarn build` in the app resource.

Wait until it's done, then build NPWD: `yarn build`

:::caution The app you've just made MUST be ensured before NPWD in the `server.cfg`.
:::
