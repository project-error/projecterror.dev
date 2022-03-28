---
id: installation
title: Installation & Database
sidebar_label: Installation
---

### Installation

1. Download latest version from [releases page](https://github.com/project-error/pe-financial/releases).
2. Unzip `pefcl` into your resources folder
3. Add `ensure pefcl` to your `server.cfg`

### Database integration

To setup the database schema, you must run the `import.sql` file found within the `root` of your `pefcl` folder.

If you already use `mysql-async`, `ghmattimysql`, or `oxmysql`. The resource will automatically configure itself to use the `mysql_connection_string`
from your `server.cfg` file.
