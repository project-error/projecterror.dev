---
id: notification-api
title: Notification API (v1)
sidebar_label: Notification API
---

NPWD includes a few exports to trigger app and system notifications, which players can interact with.

These are for the moment only client-side exports.

## Useful data

#### Default app ids

- `TWITTER`
- `MARKETPLACE`
- `CONTACTS`
- `MATCH`
- `CALCULATOR`
- `DIALER`
- `BROWSER`
- `MESSAGES`
- `NOTES`
- `CAMERA`

## Exports

### createNotification

Creates an notification for any app loaded into the phone. Both default and external apps.

```ts
type CreateNotificationDTO = {
  appId: string; // Any app ID
  content: string; // Main content
  secondaryTitle: string; // top-right title
  duration: number; // Default 3000
  keepOpen: boolean;
  path: string; // where to navigate the user when the notification is clicked
  notisId: string; // should be unique for each notification type
};
```

#### Example

```lua
exports["npwd"]:createNotification({
	notisId = "npwd:tweetBroadcast",
	appId = "TWITTER",
	content = "Hello, this is a new tweet",
    secondaryTitle = "Twitter bot",
	keepOpen = false,
	duration = 5000,
	path = "/twitter",
})
```

![](https://imgur.com/W7hptlb.png)

### createSystemNotification

System notifications let's you emulate a OS-like notification, and letting your users interact with actions.

There a few things that are important to point out. In order to use these actions (`onConfirm`, `onCancel`), you need to enable `controls` and `keepOpen`.
You can also trigger system notifications without controls.

```ts
type SystemNotificationDTO = {
  uniqId: string;
  content: string;
  secondaryTitle: string;
  keepOpen: boolean;
  duration: number;
  onConfirm?: () => void;
  onCancel?: () => void;
  controls?: boolean;
};
```

#### Example

```lua
exports["npwd"]:createSystemNotification({
  uniqId = "esxSurvey",
  content = "Do you like ESX?",
  secondaryTitle = "NPWD Survey",
  keepOpen = true,
  duration = 5000,
  controls = true,
  onConfirm = function()
    print("LIKES ESX")
  end,
  onCancel = function()
    print("DOES NOT LIKE ESX")
  end,
})
```

![](https://imgur.com/SzRiXHm.png)

## Custom window events

We have made a library with which trigger custom window events. This is to be used in external app.

```ts
// Import `useNpwdEvent` from our hook lib
import { useNpwdEvent } from "@npwd/hooks";
import { CreateNotificationDTO } from "@npwd/types";

// ...

// Use the hook to get a dispatch function - the event name here is needed
const dispatch = useNpwdEvent<CreateNotificationDTO>(
  "npwd:ext:createNotification",
  {}
);

// Then you can trigger a new notification
const triggerNotification = () => {
  dispatch({
    appId: "External app id",
    content: "Hello from external app",
    secondaryTitle: "some secondary title",
    path: "/externalapproute",
    notisId: "testNOti",
  });
};
```
