---
id: framework_integration
title: Framework Integration
sidebar_label: Framework Integration
---

### Introduction

Start by configuring the config.json:

- Enable framework integration.
- Set which resource that contains the exports.

```
  "frameworkIntegration": {
    "enabled": true,
    "resource": "your-resource"
  },
```

### Exports required

Now you need to export the following functions from the specified resource above, in this case "your-resource".

- getCash(source: number): number;
- addCash: (source: number, amount: number) => void;
- removeCash: (source: number, amount: number) => void;

PEFCL uses these exports to integrate with your existing framework when handling cash. PEFCL takes care of everything related to accounts.

:::info
There are no plans of supporting bank balances by frameworks right now, or in the near future.

We might look into creating a migration helper to move bank balance into PEFCL.
:::
