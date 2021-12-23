---
id: installation
title: Install and Setup
sidebar_label: Installation
---

### Third-Party Resource Dependencies
If you wish for NPWD to have full functionality. The following resources are required to be
installed and started before NPWD.

1. [screenshot-basic](https://github.com/project-error/screenshot-basic) - **Make sure to use the exact version, as linked.**
2. [pma-voice](https://github.com/AvarianKnight/pma-voice)

:::note
NPWD has standardized pma-voice as our default voice system for the phone. We encourage everyone to do such.
:::

## Installation and Setup

### Downloading Release
1. Download the latest release of NPWD from the [releases page](https://github.com/project-error/npwd/releases)
2. Unzip and place the `npwd` folder in your FXServer's `resources` directory.

### Setting up with a Framework
If you are using a popular framework such as ESX or QBCore, you can easily integrate NPWD using the corresponding
premade compatbility resources, these should automatically configure NPWD to work with your framework.

* [esx-npwd](https://github.com/overextended/esx-npwd)
* [qb-npwd](https://github.com/project-error/qb-npwd)

If you have *basic* development knowledge and wish to integrate NPWD with any arbitrary framework,
see the following [documentation page](../dev/FrameworkIntegration.md) for more information.


### Setting up Camera Functionality

NPWD allows for players to access a camera app and take in-game photos. These photos must be uploaded and stored somewhere.
One solution is to setup NPWD to upload the photos to Imgur. 

**Steps**
1. Setup an imgur application [here](https://api.imgur.com/oauth2/addclient)
2. Copy the client ID and add `setr SCREENSHOT_BASIC_TOKEN <your_client_id>` to your `server.cfg` file before starting NPWD.

### Setup Your Database

To setup NPWD's database schema, you must run the `import.sql` file bundled with the downloaded release.

If you already use `mysql-async`, `ghmattimysql`, or `oxmysql`. NPWD will automatically configure itself to use the `mysql_connection_string`
from your `server.cfg` file.

If you do not already use one of these libraries, you must add an entry to your `server.cfg` file for `mysql_connection_string`, matching
one of the following connection configuration formats:

```
set mysql_connection_string "mysql://root:12345@localhost/es_extended?charset=utf8mb4"
set mysql_connection_string "user=root;database=es_extended;password=12345;charset=utf8mb4"
```

### Setting up Discord Log Integration

NPWD can integrate with Discord to log certain actions. This requires a webhook to be setup and the following convar
set in your `server.cfg` file:

```
set NPWD_DISCORD_TOKEN "my_discord_webhook"
```

## Finishing Up

### Example Final Config

Your `server.cfg` should somewhat resemble the following (in terms of order): 
```cfg
set mysql_connection_string "mysql://root:12345@localhost/es_extended?charset=utf8mb4"
setr SCREENSHOT_BASIC_TOKEN "my_client_id"
set NPWD_DISCORD_TOKEN "my_discord_webhook"

ensure screenshot-basic
ensure pma-voice

ensure my_framework_here # Your framework resource
ensure esx-npwd # Any compatibility resources like esx-npwd or qb-npwd.

ensure npwd
```

Note: If you're using `es_extended` from `overextended`, `esx-npwd` is not necessary. See their [README](https://github.com/overextended/es_extended#readme) for more information.


### Important Information
* By installing [npwd (NPWD)](https://github.com/project-error/npwd), you agree to the use of the following diagnostic package:
   * Sentry, (in use within the React portion of NPWD) Automatically
     uploads relevant sesssion details and stack traces whenever an exception is thrown. We use these metrics to further improve the quality of the phone.

   * To explicitly disable this, we urge you **not to** as its incredibly useful metrics for us,
     please change the `SentryErrorMetrics` setting to `false` in `phone/config/default.json` and rebuild the phone.
* Encountered an issue? Please open an issue [here](https://github.com/project-error/npwd/issues/new/?assignees=&labels=New+Issue&template=bug-report.yml&title=Bug%3A+%3Cshort+description%3E)
* If you seek additional support, feel free to join the [Project-Error Discord](https://discord.gg/HYwBjTbAY5).

