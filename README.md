# SERVER_V2

The 2nd version of my personal server, TypeScript.

A double-server (HTTP + HTTPS) application with redirecting HTTP to HTTPS.

### <a id="my-header"></a> Header

## <a id="users-header"></a> Users Information http requests:

GET:
1. [https://host_name/api/v1/money/users](#user-get-1) - returns the existing users list with user marked as deleted
2. [https://host_name/api/v1/money/users/:login](#user-get-2) - returns a user information by user's login
3. [https://host_name/api/v1/money/users/all](#user-get-3) - return all the users data including those marked as deleted

POST:

4. [https://host_name/api/v1/money/user](#user-post-4) - return all the users data including those marked as deleted
5. [https://host_name/api/v1/money/user/delete](#user-post-5) - return all the users data including those marked as deleted

### GET:
1. <a id="user-get-1"></a> https://host_name/api/v1/money/users

returns the existing users list with user marked as deleted

response: 

        { 
            "status": "succeed", 
            "data": { 
                "id_string1": { 
                    "password": "1234",
                    "email": "email@email.com",
                    "login": "newuser3"
                },
                "id_string2": {
                    "email": "test@email.com",
                    "password": "password",
                    "login": "test@email.com"
                }
            }
        }
        
[BACK](#users-header)

2. <a id="user-get-2"></a> https://host_name/api/v1/money/users/:login

returns a user information by user's login

response: 
    
        {
            "status": "succeed",
            "data": {
                "id_string": {
                    "email": "email@email.com",
                    "login": "newuse8",
                    "password": "1234"
                }
            }
        }
        
[BACK](#users-header)

3. <a id="user-get-3"></a> https://host_name/api/v1/money/users/all

return all the users data including those marked as deleted

    response: 

        {
            "status": "succeed",
            "data": {
                "id_string1": {
                    "toDelete": true,
                    "email": "email20@email20.com",
                    "password": "1234",
                    "login": "newuse22"
                },
                "id_string2": {
                    "email": "email@email.com",
                    "service": false,
                    "toDelete": true,
                    "login": "newuser3",
                    "password": "asdfgf"
                }
            }
        }
        
[BACK](#users-header)

### POST:

4. <a id="user-post-4"></a> https://host_name/api/v1/money/user

adds new user to the DB

request body:
    
        { 
            "login": "newuser21", 
            "password": "1234", 
            "email": "email20@email20.com" 
        }

response if succeed:
    
        {
            "status": "succeed",
            "id": "id_string1"
        }

response if error:
    
        {
            "error": "user login already exists"
        }

5. <a id="user-post-5"></a> https://host_name/api/v1/money/user/delete

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


## Money information http requests:

GET:
api/v1/money/get
response:
{
"status": "succeed",
"data": {
"6x3oCP7fcJthfd5p2NII": {
"date": {
"\_seconds": 1234567645,
"\_nanoseconds": 888000000
},
"userId": "xBUSWsTp9BGnH0uJuTHl",
"balance": 0,
"type": "income",
"userName": "roman.poludnev",
"category": "testcategory",
"currency": "RUB",
"amount": 15000,
"timestamp": 1234567645888
},
"Ob61YyaeLFl2C8cjFlGM": {
"category": "NA",
"currency": "RUB",
"balance": 0,
"userId": "D05CfkFE89fzfAJjttRs",
"description": "NA",
"date": {
"\_seconds": 5515438562,
"\_nanoseconds": 342000000
},
"amount": 13455,
"userName": "newuser2",
"type": "expense",
"timestamp": 5515438562342
},
}}

https://localhost/api/v1/money/expense/get
{
"status": "succeed",
"data": {
"Ob61YyaeLFl2C8cjFlGM": {
"date": {
"\_seconds": 5515438562,
"\_nanoseconds": 342000000
},
"type": "expense",
"description": "NA",
"userName": "newuser2",
"userId": "D05CfkFE89fzfAJjttRs",
"currency": "RUB",
"balance": 0,
"category": "NA",
"amount": 13455,
"timestamp": 5515438562342
},
"oz4S1PRQjAIsS1RHLzjg": {
"userId": "D05CfkFE89fzfAJjttRs",
"userName": "newuser2",
"type": "expense",
"date": {
"\_seconds": 5515438562,
"\_nanoseconds": 342000000
},
"balance": 0,
"currency": "RUB",
"category": "NA",
"description": "NA",
"amount": 1,
"timestamp": 5515438562342
}
}
}

https://localhost/api/v1/money/income/get
{
"status": "succeed",
"data": {
"6x3oCP7fcJthfd5p2NII": {
"currency": "RUB",
"userId": "xBUSWsTp9BGnH0uJuTHl",
"date": {
"\_seconds": 1234567645,
"\_nanoseconds": 888000000
},
"type": "income",
"amount": 15000,
"category": "testcategory",
"userName": "roman.poludnev",
"balance": 0,
"timestamp": 1234567645888
},
"yUUZ522ARFwwF2nUZd85": {
"amount": 15000,
"userName": "roman.poludnev",
"type": "income",
"userId": "xBUSWsTp9BGnH0uJuTHl",
"balance": 0,
"date": {
"\_seconds": 12345677,
"\_nanoseconds": 888000000
},
"category": "testcategory",
"currency": "RUB",
"timestamp": 12345677888
}
}
}

https://localhost/api/v1/money/balance/get

{
"status": "succeed",
"data": {
"1trj6zS5eoBM4ilrnJz8": {
"userId": "xBUSWsTp9BGnH0uJuTHl",
"currency": "RUB",
"userName": "roman.poludnev",
"type": "balance",
"amount": "15000",
"date": {
"\_seconds": 12345677,
"\_nanoseconds": 888000000
},
"timestamp": 12345677888
},
"BLP0dwaa1Dqs2O43aPdw": {
"userName": "roman.poludnev",
"currency": "USD",
"type": "balance",
"amount": 321,
"userId": "xBUSWsTp9BGnH0uJuTHl",
"date": {
"\_seconds": 1645954860,
"\_nanoseconds": 0
},
"timestamp": 1645954860000
},
}}

    https://localhost/api/v1/money/get/Ob61YyaeLFl2C8cjFlGM
    {
    "status": "succeed",
    "data": {
        "currency": "RUB",
        "category": "NA",
        "balance": 0,
        "type": "expense",
        "userName": "newuser2",
        "date": {
            "_seconds": 5515438562,
            "_nanoseconds": 342000000
        },
        "amount": 13455,
        "userId": "D05CfkFE89fzfAJjttRs",
        "description": "NA",
        "timestamp": 5515438562342
    }

}

https://localhost/api/v1/money/balance/get/1trj6zS5eoBM4ilrnJz8

{
"status": "succeed",
"data": {
"date": {
"\_seconds": 12345677,
"\_nanoseconds": 888000000
},
"currency": "RUB",
"userName": "roman.poludnev",
"amount": "15000",
"userId": "xBUSWsTp9BGnH0uJuTHl",
"type": "balance",
"timestamp": 12345677888
}
}

POST:
https://localhost/api/v1/money/expense/add/
request body:
{
"timestamp": "5515438562342",
"amount": "13455",
"currency": "RUB",
"userName": "newuser2"
}
response:
{
"status": "succeed",
"id": "dWzG91Srz6Aq3dzIHMOP"
}

https://localhost/api/v1/money/income/add/
request body:
{
"timestamp": "1234567645888",
"amount": "15000",
"currency": "RUB",
"userName": "roman.poludnev",
"category": "testcategory"
}
response:
{
"status": "succeed",
"id": "X8bZczo1sWAV11bmhU0B"
}

https://localhost/api/v1/money/balance/add/
request body:
{
"timestamp": "12345677888",
"amount": "15000",
"currency": "RUB",
"userName": "roman.poludnev"
}
response:
{
"status": "succeed",
"id": "8lICv4niUwFtEJNzoBOr"
}

https://localhost/api/v1/money/update/6x3oCP7fcJthfd5p2NII
request body:
{
"category": "newCategory2",
"amount": 13000
}
response:
{
"status": "succeed",
"updateTimestamp": 1648669546846
}

https://localhost/api/v1/money/balance/update/BLP0dwaa1Dqs2O43aPdw - out of order
request body:
{
"amount": 23000
}
response:
{
"status": "succeed",
"updateTimestamp": 1648670472829
}

https://localhost/api/v1/money/expense/delete
body:
{
"id": "Ob61YyaeLFl2C8cjFlGM"
}
response:
{
"status": "deleted",
"time": 1648669741979
}

https://localhost/api/v1/money/income/delete
body:
{
"id": "X8bZczo1sWAV11bmhU0B"
}
response:
{
"status": "deleted",
"time": 1648669789339
}

https://localhost/api/v1/money/balance/delete
body:
{
"id": "IeRJ3Sgov5NRGrcDcbSG"
}
response:
{
"status": "deleted",
"time": 1643574252637
}
