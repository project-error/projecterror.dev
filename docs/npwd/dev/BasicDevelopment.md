---
id: basics
title: Basics of Development
sidebar_label: Basics
---
:::warning
This practice is outdated. Please consider look at already created apps until this page is updated.
:::

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
When you want to have a state that you can update, use in differenet components or reciving some sort of values from the client, a hook is the answer. Although, we need to have a state to read or write the value to.

Lets create a state first!

```js
// state.ts
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
// useExampleList.ts
import { useRecoilState } from 'recoil';

export const useExampleList = () => {
  const [list, setList] = useRecoilState();
  return { list, setList };
}
```

Now that we have created our hook, we'll go a step further and look at the ``"Service Hook"``

### The service hook and ``useNuiEvent``
When you want to recive data from the client, you need to set up a service hook (as we like to call it). It a function that will be called when the phone is rendered, and makes it available to recive data from the client and assign values to a desired hook of choice. If you are known with React, you probably already know how to create a hook. However, here is how you do it.

#### Setting the hook up
This hook will simply listen to any data being sent from the client and store it into any state of choice. In this example we'll continue using the recoil state, but you can also use React Context. You can read more about how to use that here (a link)

```js
// useExampleService.ts

// We'll start by importing the state and the hook we previously made
// and the useNuIEvent hook
import { useExampleList } from './useExampleList';
import { exampleState } from './state';
import { useNuiEvent } from '../../../os/nui-events/hooks/useNuiEvent';
// We also need a function from recoil
import { useSetRecoilState } from 'recoil';

export const useExampleService = () => {
  const setList = useSetRecoilState(exampleState.exampleArray);
  useNuiEvent('EXAMPLE', 'setList', setList);

  return useExampleList();
}
```
You may wonder what `useSetRecoilState` and `useNuiEvent` does. We will cover that in the next section.

`useSetRecoilState` returns a setter function for updating the value of a Recoil state (atom). We use this when we only want to write to the state without reading it. We assign this function to 'setList' and use that in the next function we'll talk about, the `useNuiEvent`.

In order to know what `app` and `method` that should update our `exampleArray` state, we need to use `useNuiEvent`. The function listens to the any `message` event, in other words, when we use the `SendNuiMessage`. Then it takes the data and updates the value using the `setList` function we just called. However we're not done yet. In order for this work, we need to call `useExampleService` in `Phone.tsx`.

```js
// Phone.tsx
import { usePhotoService } from './apps/example/hooks/useExampleService';
//...
function Phone () {
//...
useExampleService()
//...
```






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
