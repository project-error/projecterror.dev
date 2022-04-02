---
id: configuration
title: Main configuration
sidebar_label: Configuration file
---

### Introduction

This contains the main config for customizing **PEFCL**. Below you will find **main** configuration options. The config options are displayed with their default values.

If you're using a older version than the latest some of these might not be in your config yet. You can just add them manually.

### General

```json
{
  "general": {
    "useFrameworkIntegration": false,
    "language": "en",
    "currency": "USD"
  }
}
```

- `"useFrameworkIntegration"`: `boolean`
  - This should be true if you're using a framework like QB-core / ESX
- `"language"`: `en`, `sv` - [Translate to other languages?](http://lol)
  - Display language for UI elements.
- `"currency"`: `USD`, `SEK`, `...` [more](https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html)
  - Currency in which we handle money

### Debug

```json
{
  "debug": {
    "level": "error",
    "mockLicenses": false
  }
}
```

- `"level"`: `error`, `silly`, `debug`
  - Decides how many logs you want. Silly = all, error = recommended
- `"mockLicenses"`
  - Use source as license. **Do not use in production**
