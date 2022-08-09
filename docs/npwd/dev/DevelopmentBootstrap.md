---
id: dev_bootstrap
title: Setting Up for Development
sidebar_label: Bootstrap Development
---
Setting up NPWD for development requires a few steps and some familiarity with the scripts. 
This short guide will help you get your development environment bootstrapped and ready.

## Environment Setup
 
Please make sure you have the following dependencies installed within your development environment.

#### Prerequisites
* [Git](https://git-scm.com/)
* [Node > 16.x](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

#### Enabling Yarn

If you have not used Yarn before and are using Node > 16.10, you will need to enable it using `corepack enable`. If you have not
used yarn before and are using Node < 16.10, you will need to install it using `npm i -g yarn`.

## Installing Dependencies & Setup

**Step 1**

Clone the repository into your `resources` folder with the name `npwd`.

```sh
git clone https://github.com/project-error/npwd.git
```

**Step 2**

Navigate to cloned folder and install dependencies for both NUI and game scripts (This will automatically install dependencies in 
all the sub-packages)
```sh
cd npwd && yarn
```

## Build Phase

#### Building all of NPWD

To build the whole project (NUI & game-scripts), run the following command in the repository root.

```sh
yarn build
```

#### Building NUI

To build **only** the NUI package, navigate to the `phone` folder and run the `build` script as shown.

```sh
cd phone && yarn build
```

#### Building Game Scripts

To build **only** the game scripts package, navigate to the `resources` folder and run the `build` script as shown.

```sh
cd resources && yarn build
```

#### Watching files
If you don't want to rebuild all the time, you can also watch files which will write to disk.

```sh
cd phone && yarn watch
```

```sh
cd resources && yarn watch
```

:::note
### Common issues

#### Media files are not loaded when running `yarn watch`:
You most likely forgot to build the phone first. Building the phone will place the media files in `/resources/html`

:::
