# Getting Started

## Dependencies (As of 2/20/2021)
Below are the dependencies for full functionality of the resource. Adapating it to your framework shouldn't be difficult, but some of the features depend on ESX in the current sate. Additonal documentation for what needs to be changed will be made prior to full launch.

1. [Es_Extended](https://github.com/esx-framework/es_extended/tree/legacy) For the best results, we recomend **V1 Final.**
1. [Screenshot-Basic](https://github.com/project-error/screenshot-basic) **Be sure to use this version.**
1. [Mumble-Voip](https://github.com/FrazzIe/mumble-voip-fivem) Support for other VOIP resources is planned, but not currently under development.
## Prerequisites

The Installation Steps assumes you have the following prerequisites:

1. Dependencies installed.
1. The ability to open a terminal. It's *recomended*, not required, to use [Visual Studio Code](https://code.visualstudio.com/) or Windows Powershell for the sake of this guide to better provide support should issues arise. 
1. [Git for windows](https://git-scm.com/download/win) installed
1. [LTS node.js](https://nodejs.org/en/about/releases/) installed
1. [yarn](https://yarnpkg.com/) package manager installed (`npm install -g yarn`)
1. A fivem environment that is set up according to the [setting up a server instructions](https://docs.fivem.net/docs/server-manual/setting-up-a-server/) from the fivem documentation.
1. [Imgur Token](https://api.imgur.com/oauth2/addclient) Your app registration should look like [this](https://i.imgur.com/yO7L431.png). When you register your app, you will get a `Client ID`. This is set in `the server.cfg` as such ```setr SCREENSHOT_BASIC_TOKEN Client_ID```.



## Installation Steps

**Resource**

1. Clone the [repo](https://github.com/project-error/new-phone-who-dis) into your `server-data/resources/` folder. The path will be `server-data\resources\new-phone-who-dis`. **Don't clone the repo into a sub folder.**
1. Ensure the resource folder is named `new-phone-who-dis`.
1. Import the [sql file](https://github.com/project-error/new-phone-who-dis/blob/master/resources/import.sql) from the `resources` folder into your database.
1. Add the following to your `server.cfg`:
```
setr SCREENSHOT_BASIC_TOKEN Client_ID
ensure new-phone-who-dis # After es_extended.
ensure screenshot-basic
```
1. Make your configurations in the [config.json](https://github.com/project-error/new-phone-who-dis/blob/master/config.json) **before** building the phone. Otherwise you will need to re-build.
1. Open a terminal with the program of your choice.
1. Change your directiory into `new-phone-who-dis\phone` *like so*: `cd A:\FXServer\server-data\resources\new-phone-who-dis\phone`
1. Install node dependencies with `yarn install`.
1. Build in the current directory with `yarn build`.
1. Change your directiory into `new-phone-who-dis\resources` *like so*: `cd A:\FXServer\server-data\resources\new-phone-who-dis\resources`
1. Install node dependencies with`yarn install`.
1. Build in the current directory with `yarn build`.
1. Start your FiveM server

**Database**

*New Phone Who Dis (NPWD)* uses its own database driver compatible with `mysql-async` and `ghmattimysql`'s connection string. If you
don't utilize these resources, ensure you have this set in your console.

```
set mysql_connection_string "server=127.0.0.1;database=es_extended;userid=user;password=pass"
```

**Example `server.cfg`**

```cfg
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
## Development Iteration Cycle
- You must rebuild the resource following any changes by doing `yarn build` in the `resources` and `phone` folder.
- If iteration on UI changes, run the project with `yarn watch` which will monitor the JavaScript project and rebuild when you make code changes and then do `ensure new-phone-who-dis` after making your change.
- Avoid commiting `index.html` as the development version overrides the production version.


## Configuration

This resource is highly configurable through the [config.json](https://github.com/project-error/new-phone-who-dis/blob/master/config.json). This JSON file holds configuration for the phone itself, for the apps running on it and peripheral information.

Below is the list of current configuration options **(WIP)**: 

**Some of these configurations no longher apply.**

| Option                               | Default  | Description                                                                                                                    |
| ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Locale                               | en       | The language locale used by the app. See [fivem keybinds](https://docs.fivem.net/docs/game-references/controls/) for options   |
| KeyTogglePhone                       | 288 (F1) | The keybind to open and close the app. See [fivem keybinds](https://docs.fivem.net/docs/game-references/controls/) for options |
| PhoneAsItem                          | false    | whether or not the phone is an item in game                                                                                    |
| SwimDestroy                          | false    | whether or not the phone will have a chance to be destroyed while swimming                                                     |
| RunRate                              | 10       | interval in seconds to check phone destruction                                                                                 |
| DestoryChance                        | 100      | Percent chance that phone destruction will occur                                                                               |
| DestroyPhoneReCheck                  | 3        | Time in minutes before another phone destruction attempt will happen                                                           |
| notificationPosition.horizontal      | right    | Horizontal position of phone notifications. `left`, `center` or `right`                                                        |
| notificationPosition.vertical        | bottom   | Vertical positon of phone notifications. `top` or `bottom`                                                                     |
| twitter.showNotifications            | true     | Whether or not to show twitter notifications                                                                                   |
| twitter.generateProfileNameFromUsers | true     | Whether or not the server should automtically generate a player's profile name from their user in the database                 |
| twitter.allowEdtiableProfileName     | true     | Whether or not players can edit their profile name                                                                             |
| twitter.allowDeleteTweets            | true     | Whether or not players can delete their own tweets                                                                             |
| twitter.allowReportTweets            | true     | Whether or not players can report tweets. Optional discord integration.                                                        |
| twitter.characterLimit               | 160      | Limit on how many characters tweets can contain                                                                                |
| twitter.newLineLimit                 | 10       | Limit on how many new lines a message can contain                                                                              |
| twitter.enableAvatars                | true     | Whether or not player's can select avatars for their twitter profile                                                           |
| twitter.enableEmojis                 | true     | Whether or not player's can use emojis in tweets                                                                               |
| twitter.enableImages                 | true     | Whether or not player's can add images to tweets (external URLs)                                                               |
| twitter.maxImages                    | 3        | The maximum amount of images allowed in a tweet                                                                                |

## Discord Logging

To configure Discord integration; add the following variables to your `server.cfg` file:

```
set discord_bot_token "YOUR_DISCORD_BOT_TOKEN"
set discord_channel_id "YOUR_DISCORD_CHANNEL_ID"
```

Current Discord integrations with the phone **(WIP)**:

- Twitter: reporting tweets

# Important Information
* By installing [New-Phone-Who-Dis (NPWD)](https://github.com/project-error/new-phone-who-dis), you agree to the use of the following diagnostic package: 
    * Sentry, (in use within the React portion of NPWD) Automatically
    uploads relevant sesssion details and stack traces whenever an exception is thrown. We use these metrics to further improve the quality of the phone. 
    
    * To explicitly disable this, we urge you **not to** as its incredibly useful metrics for us,
    please change the `SentryErrorMetrics` setting to `false` in `phone/config/default.json` and rebuild the phone.
* Compatability with [esx_kashacter](https://github.com/FiveEYZ/esx_kashacter) is unknown as of 2/20/2021. Testing still need's to be conducted.
    * Same applies to any Multi-Character as testing has only been conducted on`V1 Final` and `1.1 Weight` **without** the use of these resources.
* Encountered an issue? Please open an issue [here](https://github.com/project-error/new-phone-who-dis/issues/new/choose) 
* If you seek additional support, feel free to join the [Project-Error Discord](https://discord.gg/HYwBjTbAY5).

# Previews

[Latest Teaser Video (October 28th)](https://streamable.com/f1ri9r)

### Apps
Most of these apps have UI that does **not** represent the final product and are subject to change.
- [**Bank**](https://i.imgur.com/P5Dg0Mj.png)
- [**Calculator**](https://i.imgur.com/96e3bFF.png)
- [**Camera**](https://i.imgur.com/1aGEV28.png)
- [**Contacts**](https://i.imgur.com/3Qc1eJB.png)
- [**Marketplace**](https://i.imgur.com/8hPm6tU.png)
- [**Messages**](https://i.imgur.com/UYHoVvy.png)
- [**Notes**](https://i.imgur.com/m0ktIyj.png)
- [**Phone**](https://i.imgur.com/zuxERmR.png)
- [**Settings**](https://i.imgur.com/0ggMdij.png)
- [**Twitter**](https://i.imgur.com/WfjOl1t.png)