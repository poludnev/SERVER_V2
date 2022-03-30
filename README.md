# SERVER_V2

The 2nd version of my personal server, TypeScript.

A double-server (HTTP + HTTPS) application with redirecting HTTP to HTTPS.

Users Information http requests:

GET:
/api/v1/money/users
{
"status": "succeed",
"data": {
"TH8jGSwAb3e8oHMcUwQw": {
"password": "1234",
"email": "email@email.com",
"login": "newuser3"
},
"UNqRdRJZvLcEvSnihpcp": {
"email": "test@email.com",
"password": "password",
"login": "test@email.com"
},
}
}

/api/v1/money/users/newuse8
{
"status": "succeed",
"data": {
"k2vkOuN5SzJk9VtxYf9r": {
"email": "email@email.com",
"login": "newuse8",
"password": "1234"
}
}
}

/api/v1/money/users/all
{
"status": "succeed",
"data": {
"9hadFCYofLeQN5v6SAu4": {
"toDelete": true,
"email": "email20@email20.com",
"password": "1234",
"login": "newuse22"
},
"BTtAA5vYT9UT3WAjxbSP": {
"email": "email@email.com",
"service": false,
"toDelete": true,
"login": "newuser3",
"password": "asdfgf"
},
}
}

POST:
/api/v1/money/user
request body:
{
"login": "newuse21",
"password": "1234",
"email": "email20@email20.com"
}
response if succeed:
{
"status": "succeed",
"id": "9hadFCYofLeQN5v6SAu4"
}
response if error:
{
"error": "user login already exists"
}

/api/v1/money/user/delete
request body:
{
"login": "newuse21"
}
response if succeed:
{
"status": "deleted",
"time": 1648666049341
}
response if error:
{
"error": "no login"
}
