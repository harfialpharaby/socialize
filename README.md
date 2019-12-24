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

req = {
    body: {
        {
            first_name: STRING<firstName>,
            last_name: STRING<lastName>,
            password: STRING<password>,
            email: STRING<email>,
            username: STRING<username>,
            profilPict: '161bbd1abc24d29e1abefd0f21ff90f8'
        }
    }
}
```
### Show own profile
```bash
GET /user/page

req = {
    session: {
        userId: INTEGER<user id>,
        fullName: STRING<user full name>
    }
}
```
### Show other profile
```bash
GET /otherpage/:id

req = {
    params: {
        id: INTEGER<other user id>
    },
    session: {
        fullName: STRING<logged in user full name>
    }
}
```
### Show edit profile page
```bash
GET /users/edit

req = {
    session: {
        userId: INTEGER<logged in user id>,
        fullName: STRING<logged in user full name>
    },
    data: STRING<req.query success='success message' or failed='failed message'>
}
```
### Edit profile page
```bash
POST /users/edit

req = {
    first_name: STRING<new first name>,
    last_name:STRING<new last name>,
    old_password: STRING<old password to indentify the user>,
    new_password: STRING<new password or null to unchange password>,
    email: STRING<new email>,
    username: STRING<new username>,
    session: {
        userId: INTEGER<logged in user id>
    }
}
```
### Upload profile image
```bash
POST /users/profile

req = {
    file: {
        filename: STRING<new uploaded file image>
    },
    session: {
        userId: INTEGER<logged in user id>
    }
}
```

# Tag Docs
### Show tags list
```bash
GET /tags

req = {
    session: {
        fullName: STRING<logged in user full name>
    }
}
```

# Middlewares
### CheckIsUser
Validate logged in user to acessing other user page.
#### Usage :
```bash
const checkIsUser = require('../middlewares/checkIsUser')
```
#### How to use on every children path, example use on `/otherpage` parent path route ?
```bash
router.get('/otherpage',checkIsUser)
router.get('/otherpage/:id', UserController.otherPage)
```

### checkLogin
Validate user is in login state so that user can access all logged in features.
#### Usage :
```bash
const checkLogin = require('../middlewares/checkLogin')
```
#### How to use on every children path, example use on `/users` parent path route ?
```bash
router.use('/',checkLogin)
router.get('/page', UserController.userPage)
```

### redirectIfLogin
#### Usage :
```bash
const redirectIfLogin = require('../middlewares/redirectIfLogin')
```
#### How to use on every children path, example use on `/users` parent path route ?
```bash
router.get('/', redirectIfLogin)
router.get('/', UserController.loginPage)
```

# Helpers
### Hashingpassword
#### Usage
```bash
const hashingPassword = require('../helpers/hashingPassord')
```
#### How to use it ?
```bash
hashingPassword(
    STRING<random secret wether its auto generated or save on database for each data>, 
    STRING<plain password typed by user on browser>
)
```