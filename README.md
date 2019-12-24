# Socialize
### Pair Project Phase 1 by Samuel and Harfi
Hacktiv8 Pair Project as Final Project on phase 1 using expressjs, ejs, sequelize, herokuapp

# Application
Accessing the web by using this link https://sosialisasi.herokuapp.com

# Getting started
Run commands below :
```bash
git clone https://github.com/harfialpharaby/socialize.git
git checkout -b <new-feature-development>
```

# Installation
Run the following commands :
```bash
npm init
sequelize db:create
sequelize db:migrate
```

# Feeds Docs
### Show add feed form
```bash
GET /feeds/add

data = req.session
```

### Add feed
```bash
POST /feeds/add

req = {
    body: {
        title = <feed title>, 
        content = <feed content>,
        tagsName = <tags list no space with comma delimiter>
    }
}
```

### Show edit feed form
```bash
GET /feeds/edit

data = {
    feed = <getting feed by req.params.id>, 
    fullName = req.session.fullName
}
```

### Show tagged feed
```bash
GET /tagged/:tagName

req = {
    session: {
        fullName = STRING<logged in user>, 
        userId = INTEGER<logged in user>
    },
    params: {
        tagsName = ARRAY[STRING<searched tags>]
    }
}

```

### Like feature
```bash
GET /like/:feedId

req = {
    session: userId,
    params: {
        feedId: INTEGER<feed id>
    }
}
```

### Dislike feature
```bash
GET /dislike/:feedId

req = {
    session: userId,
    params: {
        feedId: INTEGER<feed id>
    }
}
```

# User Docs
### Register form
```bash
GET /users/register
```
### Register
```bash
POST /users/register


```
### Show own profile
```bash
```
### Show add feed
```bash
```
### Show other profile
```bash
```
### Show edit profile page
```bash
```
### Edit profile page
```bash
```
### Upload profile image
```bash
```

# Tag Docs
### Show tags list
```bash
```