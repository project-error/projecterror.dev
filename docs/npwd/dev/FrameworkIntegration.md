---
id: framework_integration
title: Framework Integration with NPWD
sidebar_label: Framework Integration
---

NPWD was designed to be a framework agnostic resource that could work with any arbitrary framework. To enable this,
we expose the `newPlayer` & the `unloadPlayer` export functions to pass the player context to NPWD.

:::warning

The NPWD player API is mostly finalized, but the naming of certain exports and the expected data structure,
may be subject to change.

:::

## Framework Integration Steps

You should use the `newPlayer` function whenever a player has finished loading in your framework. If you have a 
multicharacter system or any framework that handles player data, make sure that the `identifier` property in the passed argument object is unique to 
each character.

If your framework has a system for switching characters, you should first call the `unloadPlayer` function to unload
the internal NPWD player, then call the `newPlayer` function to load the new character with the new context.

## Examples

If you would like to see an example of this API in use, see the following repositories.

* [esx-npwd](https://github.com/overextended/esx-npwd)
* [qb-npwd](https://github.com/qbcore-framework/qb-npwd)
