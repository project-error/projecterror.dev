## Features

- ZERO Database changes needed to replace [GCPhone V3](https://github.com/manueljlz/gcphone/) or any other public versions.

- Full contacts list.

- Sending text messages.

- Voice calls.

- Anonymous calling.

- Bank application (With full bank transfers). Link to official new_banking -> https://github.com/NewWayRP/new_banking (For the bank application to work unless you edit yourself.)

- Anonymous Chat application.

- Stock market application (With full functionality soon).

- Customizable cover / screen.

- Add Contacts from recent text messages.

- Add Contacts from recent call history.

- Custom Ringtones with working Volume system in settings.

- Mouse control is back at 100% functionality.

- Screenshots/Selfies with already working upload server.

- Easy installation instructions. Created for us by @ROCKY_southpaw#7777

## Configuration

- You can modify the sounds in `\html\static\sound`

- You can modify the backgrounds in `\html\img\background`

- You can modify the phone shell in `\html\img\coque`

- The shells must be in 1000x500 px format, the screen area for creating backgrounds is centered in size 800 * 400.

- Bank & Stock Market application(s) must be configured according to your scripts.

- See installation.md for more configurations.

- See Images at bottom of page for examples.

#### Important Note Regarding `esx_addons_gcphone`:

*ESX Addons GCPhone has been merged INTO the gcphone files for ease of use. 
You are no longer required to add `ensure esx_addons_gcphone` to your server.cfg.* 

*Please put `ensure gcphone` before jobs.*

## Example `server.cfg`
```
ensure mysql-async

ensure essentialmode (For esx 1.1)
ensure esplugin_mysql
ensure es_extended

ensure gcphone
ensure screenshot-basic

ensure esx_policejob
ensure esx_ambulancejob
ensure esx_job3
```

## Screenshots