# Installation

## Getting started
Installing NPWD is quite easy. You download the resource, which is located here. Make sure you are downloading from releases. Once installed, add the resource to your server. Next, you need to import the ``import.sql`` to your designated database.



### Production build

# Features

> Keep in mind. If you want to add new configs, they will need to be placed in the ``common/interfaces/config``
# Configuration

### Database
NPWD uses a database handler, which means that all the database handling are happening from the resource.

### Important note
> As the NPWD uses a database handler, you don't need to use a library like ``mysql-async`` or ``ghmattimysql``. 

## Example ``server.cfg``

```cfg
ensure mysql-async

ensure es_extended

ensure new-phone-who-dis
ensure screenshot-basic

# all other resources you might have
```

## Screenshots