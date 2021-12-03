---
id: installation
title: Installation of the Phone
sidebar_label: Installation
---
### Initial Setup
1. Clone directly from our Git repo, which can be found [here](https://github.com/project-error/npwd),
   into FXServer's `resources` directory.
   
:::warning
For the moment, do not attempt to clone directly into a subdirectory, such as `[phone]` as this
may raise unexpected behavior with path handling.
:::
   
2. Add the following lines to the `server.cfg`
```cfg
setr SCREENSHOT_BASIC_TOKEN Client_ID
# This must be placed after your framework
ensure nwpd
ensure screenshot-basic
```
3. Change the config settings that can be found in `npwd/config.json`, to
the settings of your choosing.
   
### Install Dependencies and Building Code
As this is a `TypeScript` resource, we need to both install `npm` packages and build the source
code.

1. Open a terminal of your choice (i.e, Powershell
2. Navigate to the NPWD root directory

3. Install yarn
```shell
yarn 
# or
yarn install
```

3. Build
```shell
yarn build 
```
[**Lerna**](https://github.com/lerna/lerna) will now build both `resources` and `phone` files.
   
### Database Setup
*New Phone Who Dis* integrates our own `MySQL` client directly (`mysql2`). Meaning, we do
not require a middleware resource like `mysql-async` or `oxmysql`.

**Make sure you have the following added to your `server.cfg` file, with the values 
replaced with your respective credentials** 

```cfg
set mysql_connection_string "server=127.0.0.1;database=npwd_wow;userid=dev;password=devlocal"
```

:::note

If you already have `ghmattimysql` or `mysql-async` correctly installed, we are able to parse
those connection details without any changes, as our connection string format is directly compatible.
:::

### Finishing Up

After you have completed all of these listed steps, your `server.cfg` should look something
like this:

```shell
# Your framework must be started before NPWD.

# pma-voice
ensure pma-voice
# and other convars you use

# NPWD
setr SCREENSHOT_BASIC_TOKEN YOUR_IMGUR_TOKEN # Don't forget to set the token here.
ensure npwd
ensure screenshot-basic

#All other resources you might have
```

You should now be all set to start your server up and play with the resource!


:::note
If you get the error: `Error: Event playerJoining was not safe for net.` then your artifacts are outdated.

NPWD requires a **minimum** of artifact version `3622`. Please update your artifacts to the latest version [here](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/?)
:::

### Handling user data
If you are only going to use the default player data, you can look away from this. For you that are using a framework, or some sort of a multicharacter system, please keep reading.

Let's start with changing the config. Change 'enableMultiChar' to `true` and remember to change the database options if needed.
```json
{
   "general": {
      "useDashNumber": true,
      "enableMultiChar": true
   },
   "database": {
      "playerTable": "users",
      "identifierColumn": "identifier"
   }
}
```

We have created the server-side event called `npwd:newPlayer` that you need to call in order to apply the user data desired. It takes in a object as an argument with `{ source, identifier, firstname, lastname }`, where `firstname` and `lastname` are optional.

If you are using ESX, we already have the solution for you.
### ESX
#### Lua
```lua
-- server-side
AddEventHandler('esx:playerLoaded', function(playerId, xPlayer)
   TriggerEvent('npwd:newPlayer', 
      { 
        source = playerId, 
        identifier = xPlayer.identifier, 
        firstname = xPlayer.get('firstname'),
        lastname = xPlayer.get('lastname')
      }
   )
end)
```

#### JS/TS
```js
// server-side
on('esx:playerLoaded', (playerId, xPlayer) => {
    emit('npwd:newPlayer', { 
        source: playerId, 
        identifier: xPlayer.identifier, 
        firstname: xPlayer.get('firstname'), 
        lastname: xPlayer.get('lastname') 
    })
})
```

If you're using any other framework, listen to what event that selects or loads the character and trigger the `npwd:newPlayer` event with your data.

:::note
If you don't see a open-source framework listed here and have a solution, please consider sharing it with us!
:::
