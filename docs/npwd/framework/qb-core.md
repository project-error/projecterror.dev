---
id: qb-core
title: QB-Core Integration
sidebar_label: QB-Core Integration
---

## Dependencies
Below are a list of dependencies, outside of the standard installation, for *NPWD* to work with a *QB-Core* server.
- [qb-core](https://github.com/qbcore-framework/qb-core)
    - Required for *NPWD* to work with `QB-Core` using the `newPlayer` export.
    - Make sure to ensure `npwd` before `npwd`

:::info
If you wish to add the phone as a required item, you can see an example in this [resource](https://github.com/qbcore-framework/qb-npwd).
:::

### Initial Setup
The following steps are required for *NPWD*. Follow each step exactly as shown.

:::warning 
Failure to adhere to these instructions will result in *NPWD* not working correctly.
:::

In your `server.cfg`, add the following:

```
set npwd:framework qbcore
```

1. Adjust the [config.json](https://github.com/project-error/npwd/blob/master/config.json) file in *NPWD* to match the example below.
```json
  "PhoneAsItem": {
    "enabled": true,
    "exportResource": "qb-npwd",
    "exportFunction": "HasPhone"
  },
```
2. Run the sql query below. This will add the `phone_number` column to the `players` table.
```sql
ALTER TABLE players ADD COLUMN `phone_number` VARCHAR(20) DEFAULT NULL;
```
