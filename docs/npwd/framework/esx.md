---
id: esx
title: ESX Integration
sidebar_label: ESX Integration
---

## Dependencies
Below are a list of dependencies, outside of the standard installation, for *NPWD* to work with *ESX*.
- [ESX](https://github.com/esx-framework/esx-legacy)
    - While [esx-npwd](https://github.com/overextended/esx-npwd) may work on older *ESX* versions, It will break *NPWD* in *ESX Legacy*.

### Configuration

In your `server.cfg`, add the following:

```
set npwd:framework esx
```

:::info

If you're downloading the whole ESX Legacy package it comes with `esx_phone`, make sure to remove it if you're going to be using `npwd`.
:::

:::info

Currently when using the ESX Legacy integration the ``PhoneAsItem`` setting does not work and should stay disabled.
```json
"PhoneAsItem": {
    "enabled": false,
    "exportResource": "my-core-resource",
    "exportFunction": "myCheckerFunction"
  },
```
:::
Currently to open the *NPWD* phone you need to have an Item with the label ``phone`` in your inventory. 
When you dont already have a item with the label ``phone`` you add it with this SQL query:
```sql
INSERT INTO `items` (`name`, `label`, `weight`, `rare`, `can_remove`) VALUES ('phone', 'Smartphone', 1, 0, 1);
```

### Final Notes
Be sure your `server.cfg` resembled the example found within the [installation](../start/installation#example-final-config) page. As a reminder, `esx-npwd` may not work on new versions of ESX [Legacy](https://github.com/esx-framework/esx-legacy). The new versions of ESX Legacy have *NPWD* Integration build in.