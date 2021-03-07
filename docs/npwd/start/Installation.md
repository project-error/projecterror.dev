---
id: installation
title: Installation of the Phone
sidebar_label: Installation
---
### Initial Setup
1. Clone directly from our Git repo, which can be found [here](https://github.com/project-error/new-phone-who-dis),
   into FXServer's `resources` directory.
   
:::warning
For the moment, do not attempt to clone directly into a subdirectory, such as `[phone]` as this
may raise unexpected behavior with path handling.
:::
   
2. Add the following lines to the `server.cfg`
```cfg
setr SCREENSHOT_BASIC_TOKEN Client_ID
# This must be placed after es_extended
ensure new-phone-who-dis
ensure screenshot-basic
```
3. Change the config settings that can be found in `new-phone-who-dis/config.json`, to
the settings of your choosing.
   
### Install Dependencies and Building Code
As this is a `Typescript` resource, we need to both install `npm` packages and build the source
code.

1. Open a terminal of your choice (i.e, Powershell
2. Navigate to the NPWD resource directory using `cd`, for example:
```shell
cd E:\FXServer\resources\new-phone-who-dis
```
3. Navigate to the `phone/` and run the following commands
```shell
cd phone
# This will install the node modules
yarn
# This will build the source code
yarn build
```
4. Now we will do the same for the `resources/` folder.
```shell
# Will navigate to the resources/ directory
cd ../resources
# We need to run the same commands as we did for the phone/ directory
yarn
yarn build
```
   
### Database Setup
*New Phone Who Dis* integrates our own `MySQL` client directly (`mysql2`). Meaning, we do
not require a middleware resource like `mysql-async`.

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
ensure es_extended # Must be started first.

# Mumble-Voip
ensure mumble-voip
setr voice_use3dAudio true
setr voice_useSendingRangeOnly off

#NPWD
setr SCREENSHOT_BASIC_TOKEN YOUR_IMGUR_TOKEN # Don't forget to set the token here.
ensure new-phone-who-dis 
ensure screenshot-basic

#All other resources you might have
```

You should now be all set to start your server up and play with the resource!


