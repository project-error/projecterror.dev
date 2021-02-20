# Getting Started

## Dependencies (As of 2/18/2021)
Below are the dependencies for full functionality of the resource. Adapating it to your framework shouldn't be difficulty, but some of the features depend on ESX. Additonal documentation for what needs to be changed will be made prior to full launch.

1. [es_extended](https://github.com/esx-framework/es_extended/tree/legacy) For the best results, we recomend **V1 Final.**
1. [Screenshot-Basic](https://github.com/project-error/screenshot-basic) **Be sure to use this version.**

### Prerequisites

The Installation Steps assumes you have the following prerequisites:

1. Dependencies installed.
1. The ability to open a terminal. It's *recomended*, not required, to use [Visual Studio Code](https://code.visualstudio.com/) or Windows Powershell for the sake of this guide to better provide support should issues arise. 
1. [Git for windows](https://git-scm.com/download/win) installed
1. [LTS node.js](https://nodejs.org/en/about/releases/) installed
1. [yarn](https://yarnpkg.com/) package manager installed (`npm install -g yarn`)
1. A fivem environment that is set up according to the [setting up a server instructions](https://docs.fivem.net/docs/server-manual/setting-up-a-server/) from the fivem documentation.

#### Installation-Steps

1. Clone the [repo](https://github.com/project-error/new-phone-who-dis) into your `server-data/resources/` folder. The path will be `server-data\resources\new-phone-who-dis`. **Don't clone the repo into a sub folder.**
1. Ensure the resource folder is named `new-phone-who-dis`.
1. Import the [sql file](https://github.com/project-error/new-phone-who-dis/blob/master/resources/import.sql) from the `resources` folder into your database.
1. Add `ensure new-phone-who-dis` to your `server.cfg`.
1. Make your configurations in the [config.json](https://github.com/project-error/new-phone-who-dis/blob/master/config.json) **before** building the phone.
1. Open a terminal with the program of your choice.
1. Change your directiory into `new-phone-who-dis\phone` *like so*: `cd A:\FXServer\server-data\resources\new-phone-who-dis\phone`
1. Install node dependencies with `yarn install`.
1. Build in the current directory with `yarn build`.
1. Change your directiory into `new-phone-who-dis\resources` *like so*: `cd A:\FXServer\server-data\resources\new-phone-who-dis\resources`
1. Install node dependencies with`yarn install`.
1. Build in the current directory with `yarn build`.
1. Start your FiveM server

# Additonal Information
* New-Phone-Who-Dis uses a database handler, you don't need to use a library like ``mysql-async`` or ``ghmattimysql``. 
* Compatability with [esx_kashacter](https://github.com/FiveEYZ/esx_kashacter) is unknown as of 2/19/2021. Testing still need's to be conducted. 

### Example ``server.cfg``

```cfg
ensure es_extended

ensure new-phone-who-dis
ensure screenshot-basic

# all other resources you might have
```

## Previews
