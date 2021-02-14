## Development Resources


## Creating a new app

### Getting started
### Adding a new app to useApps
Before creating a new app we want to create a new ``app object`` for our app. The object takes in a couple of properties:

* ``id`` - The name of the app.
* ``nameLocale`` - For creating the locale's.-
* ``icon`` - The icon that will be used at the home screen.
* ``backgroundColor`` - The background color for the header (if you use the ``AppTitle``) and for the app in the home screen.
* ``color`` - Color of the app icon
* ``path`` - The path for the app. Example ``path: "/example"``.
* ``Route`` - A function that uses ``Route`` from ``react-router-dom``.

#### Example
```js
{
  id: "EXAMPLE",
  nameLocale: "APPS_EXAMPLE",
  icon: <FontAwesomeIcon icon={faPlaneArrival} size="sm" />,
  backgroundColor: blue[500],
  color: blue[50],
  path: "/example",
  Route: () => <Route path="/example" component={ExampleApp} />,
}
```

### The main app component
When creating a new app for the phone, you want to import the ``AppWrapper`` and ``AppContent``. These are two reusable components that surrounds all apps. You  also have access to the ``AppTitle`` component, which serves as a header.

The ``AppTitle`` takes in a prop called `app`. Here you can add any string you want, but as a good practice, use the ``useApp`` hook. Here is an example.

```js
export const ExampleApp = () => {
  // Calling the useApp hook, and passing in the app name. 
  // The app name will the name you added in useApps.
  const example = useApp('EXAMPLE');

  return (
    <AppWrapper>
      <AppTitle app={example} />
```

## Hooks
First we want to import one of the hooks available from the ``recoil`` library.


If you only want to read a state, you should use the ``useRecoilValue``. This will only read the state, without writing, or updating it. Do you also want to write to the state, you need the ``useRecoilState``, which is a API similar to the React ``useState``. 

### Creating a hook and states
When you want to have a state that you can update, use in differenet components or reciving some sort of vaules from the client, a hook is the answer. Although, we need to have a state to read or write the value to.

Lets create a state first!

```js
import { atom } from 'recoil';

export const exampleState = {
  exampleArray: atom({
    key: 'exampleArray', // make sure this is unique, globally.
    default: []
  })
}
```

We need to use the state somehow, and be able to read, write or both. Let's hook at how we create a simple hook. In this example we will both read and write to the state.

```js
import { useRecoilState } from 'recoil';

export const useExampleList = () => {
  const [list, setList] = useRecoilState()
  return { list, setList }
}
```

Now that we have created our hook, we'll go a step further and look at the ``"Service Hook"``

### The service hook and ``useNuiEvent``
When you want to recive data from the client, you need to set up a service hook (as we like to call it). It a function that will be called when the phone is rendered, and makes it available to recive data from the client and assign values to a desired hook of choice. If you are known with React, you probably already know how to create a hook. However, here is how you do it.

#### Setting the hook up




### Full example
#### ExampleApp.tsx
```js
// ExampleApp.tsx
import React from 'react';
import { AppWrapper } from '../../../ui/components';
import { AppTitle } from '../../../ui/components/AppTitle';
import { AppContent } from '../../../ui/components/AppContent';
import { useApp } from '../../../os/apps/hooks/useApps';
import { useExample } from '../hooks/useExample';

export const ExampleApp = () => {
  // calling the example hook, and we assign the value to a variable
  const exampleString = useExample();
  const example = useApp('EXAMPLE');
  return (
    <AppWrapper>
      <AppTitle app={example} />
      <AppContent>
        <h1>This is an example</h1>
        {/* Here we are using the value in a h3 tag */}
        <h3>{exampleString}</h3>
      </AppContent>
    </AppWrapper>
  );
};
```

#### useExample.tsx
```js
import { useRecoilValue } from 'recoil';
import { exampleState } from './state';

export const useExample = () => {
  const example = useRecoilValue(exampleState.example);
  return example;
};
```