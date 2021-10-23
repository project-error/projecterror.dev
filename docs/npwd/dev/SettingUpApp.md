---
id: setup
title: Setting up the app
sidebar_label: Setting up the app
---

#### When creating a new app there's a few prerequisites. Let's go through them now.

### Setting up the theme
Let's cover the "boring" part first, so we don't have to worry about this later on.

Each app has a `*.theme.ts` file where we define its colors and palette. These files are located inside the app folder itself.
You can easily copy an existing one, and tweak it to your liking.

You'll see that we define `MESSAGES_APP_PRIMARY_COLOR` and `MESSAGES_APP_TEXT_COLOR` first.
```typescript
export const CONTACTS_APP_PRIMARY_COLOR = blue[500];
export const CONTACTS_APP_TEXT_COLOR = common.white;
```
The primary color serves as the main color of the app, whereas the text color serves as the contrast color.
The `MESSAGES_APP_PRIMARY_COLOR` is for example used for the header color in each app, as well as the background color of each app at the home screen.

```typescript
const theme = {
  palette: {
    primary: {
      main: CONTACTS_APP_PRIMARY_COLOR,
      dark:  blue[700],
      light: blue[300],
      contrastText: CONTACTS_APP_TEXT_COLOR,
    },
  },
};
```

We then use these to variables as `main` and `contrastText`. The two next properties, `dark` and `light` is text colors for the light/dark theme.

You can also define palettes for `secondary` colors or `success` to indicate the successful completion of an action that user triggered.

#### Full usage
```typescript
palette: {
  primary: {
    main: CONTACTS_APP_PRIMARY_COLOR,
    dark: blue[700],
    light: blue[300],
    contrastText: CONTACTS_APP_TEXT_COLOR,
  },
  secondary: {
    main: '#d32f2f',
    light: '#eb4242',
    dark: '#941212',
    contrastText: CONTACTS_APP_TEXT_COLOR,
  },
  success: {
    main: '#2196f3',
    contrastText: CONTACTS_APP_TEXT_COLOR,
  },
},
```
--- 

### Adding icons
There is no app without an awesome looking icon! Defining our icon is fairly straight forward.

Located in `/os/apps/icons/*`

We have two options. We can add MUI icons and svgs sets, or just one of them. If you choose to only add icons for one type, it might be a good idea
to disable to option of switching icon set.

```typescript jsx
import React from 'react';
import { Contacts } from '@mui/icons-material';

const ContactIcon: React.FC = () => <Contacts fontSize="large" />;

export default ContactIcon;
```

When you've found the icon you like, you export it, and you're done! We automatically import these icons depending on what icon set you have selected.
You just have to worry about finding a cool app icon!

### Initialize the app
To complete the process we have one more step left. We still have to define the app somewhere, and we do such in `apps`. 

Located in `os/apps/config/apps`

Let's go through what the app object needs:
* ``id`` - The name of the app.
* ``nameLocale`` - For showing the correct translation of the app name.
* ``icon`` - The icon that will be used at the home screen, notifications etc.
* ``backgroundColor`` - The main color for the app
* ``color`` - Color of the app icon. Will only be applied on MUI icons
* ``path`` - The path for the app. Example ``path: "/example"``.
* ``Route`` - A function that uses ``Route`` from ``react-router-dom``.

#### Example
```typescript
import {
  CONTACTS_APP_PRIMARY_COLOR,
  CONTACTS_APP_TEXT_COLOR,
} from '../../../apps/contacts/contacts.theme';
```

```typescript jsx
{
  id: "CONTACTS"
  nameLocale: "APPS_CONTACTS",
  backgroundColor: CONTACTS_APP_PRIMARY_COLOR,
  color: CONTACTS_APP_TEXT_COLOR,
  path: "/contacts", 
  Route: () => (
  	<AppRoute id="CONTACTS" path="/contacts" component={ContactsApp} emitOnOpen={false} />
  ),
}
```

Here you can see that we are using the two colors we previously made, `CONTACTS_APP_PRIMARY_COLOR` and `CONTACTS_APP_TEXT_COLOR`

:::note
Assuming you don't have an app component yet, you can read more about that at `Basics of Development`.
:::

### Wrap up
Now that you're all set, its time to start developing! Have fun :D