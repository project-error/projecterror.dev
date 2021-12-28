---
id: disable_apps
title: Disable Apps
sidebar_label: Disable Apps
---

If you wish to disable a certain app, open up `apps.tsx`;

Location: `phone/src/os/apps/config/apps.tsx`

Here you'll see all the apps listed within the `APPS` object. In order to remove an app, you can simply comment out or remove the app you want.

```tsx
export const APPS: IAppConfig[] = [
  ..//
/* Hiding the bank app while the bank resource gets done */
  /*{
    id: 'BANK',
    nameLocale: 'APPS_BANK',
    backgroundColor: blue[900],
    color: common.white,
    path: '/bank',
    Route: () => <AppRoute id="BANK" path="/bank" component={BankApp} />,
  },*/
  {
    id: 'MATCH',
    nameLocale: 'APPS_MATCH',
    backgroundColor: MATCH_APP_PRIMARY_COLOR,
    color: MATCH_APP_TEXT_COLOR,
    path: '/match',
    Route: () => <AppRoute id="MATCH" path="/match" component={MatchApp} emitOnOpen={true} />,
  },
  /...
]
```