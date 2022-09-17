---
id: framework_integration
title: Framework Integration
sidebar_label: Framework Integration
---

### Introduction

Welcome to framework integration for PEFCL. We support multiple frameworks out of the box, as well as allow the option to use your own framework with a few simple exports.

### Officially supported frameworks by PEFCL

1. Download the framework integration bridge for your framework below.
2. Update config.json
3. Update server.cfg

:::info

Setting `syncInitialBankBalance` will allow bank balance to be synced to the initial account created by PEFCL via the `getBank` export from the framework integration resource.

:::

#### QBCore

1. Download: [qb-pefcl](https://github.com/project-error/qb-pefcl)

2. Update config.json

```
"frameworkIntegration": {
    "enabled": true,
    "resource": "qb-pefcl",
    "syncInitialBankBalance": true
}
```

3. Update server.cfg (starting order)

```
ensure qb-pefcl
ensure pefcl
```

#### ESX

1. Download: [pefcl-esx](https://github.com/project-error/pefcl-esx)

2. Update config.json

```
"frameworkIntegration": {
    "enabled": true,
    "resource": "pefcl-esx",
    "syncInitialBankBalance": true
}
```

3. Update server.cfg (starting order)

```
ensure pefcl-esx
ensure pefcl
```

### Custom framework, Required exports (Advanced)

:::warning

If you're using a _supported framework_ by PEFCL you can ignore this segment.

This is only for creating your own framework integration!

:::

Start by configuring the config.json:

- Enable framework integration.
- Set which resource that contains the exports.

```
"frameworkIntegration": {
    "enabled": true,
    "resource": "your-resource",
    "syncInitialBankBalance": true
}
```

You need to export the following functions from your framework integration resource, in this case "your-resource".
All of these exports are server side.

- getCash(source: `number`): `number`;
  - Should return cash balance from the framework player.
- getBank(source: `number`): `number`;
  - Should return bank balance from the framework player.
- addCash: (source: `number`, amount: `number`): `void`;
  - Should add cash balance to the framework player.
- removeCash: (source: `number`, amount: `number`): `void`;
  - Should remove cash balance to the framework player.
- giveCard(source: `number`, card: `Card`): `void`;
  - Should add a bank_card to framework player inventory.
- getCards(source: `number`): `InventoryCard`;
  - Should return cards from framework player inventory.

PEFCL uses these exports to integrate with your existing framework when handling cash. PEFCL takes care of everything related to accounts.

#### Interfaces

These are the interfaces that are related to framework exports.

giveCard(source: `number`, card: `Card`): `void`;

```Typescript
export interface Card {
  id: number;
  account?: Account;
  accountId?: number;

  pin: number;
  isBlocked: boolean;

  holder: string;
  number: string;

  updatedAt?: string | number | Date;
  createdAt?: string | number | Date;
}
```

getCards(source: `number`): `InventoryCard[]`;

```Typescript
export interface InventoryCard {
  id: number;
  holder: string;
  number: string;
}
```
