# SERVER_V2

The 2nd version of my personal server, TypeScript.

A server application with redirecting HTTP to HTTPS.

<br>

## Install and Run


<br>
To install: 

npm install

<br>
To run:

npm start

<br>

## Configure the SERVER (config.env)

<br>

As the basic server is HTTPS, you should configure cetrificate to make it work. 
Please point out our certificates path in the config.env:


CERT_ADDRESS - catalog where the certs are located

CERT_NAME - name of your certificates. 


For instance, you certs are in the following folder:

/cert/CA/localhost/localhost.crt

/cert/CA/localhost/localhost.key


Fill in the config.env:

CERT_ADDRESS=cert/CA/localhost/

CERT_NAME=localhost


<br>

GOOGLE_APPLICATION_CREDENTIALS - fill in the address of the firebase credentials. 

Please refer to the official docs: https://firebase.google.com/docs/admin/setup





<br>

## <a id="users-header"></a> Users Information http requests:

#### GET:

1. [https://host_name/api/v1/money/users](#user-get-1) - returns the existing users list excluding users marked as deleted
2. [https://host_name/api/v1/money/users/:login](#user-get-2) - returns a user information by user's login
3. [https://host_name/api/v1/money/users/all](#user-get-3) - return all the users data including those marked as deleted

#### POST:

4. [https://host_name/api/v1/money/user](#user-post-4) - return all the users data including those marked as deleted
5. [https://host_name/api/v1/money/user/delete](#user-post-5) - marks a user by login as deleted:

<br>

## <a id="money-header"></a> Money information http requests:

#### GET:

1. [https://host_name/api/v1/money/get](#money-get-1) - returns existing transactions list excluding those marked as deleted
2. [https://localhost/api/v1/money/expense/get](#money-get-2) - returns expense-type transactions
3. [https://localhost/api/v1/money/income/get](#money-get-3) - returns income-type transactions
4. [https://localhost/api/v1/money/balance/get](#money-get-4) - returns balance-type transactions
5. [https://localhost/api/v1/money/get/:id](#money-get-5) - returns expnese or income transactions by id
6. [https://localhost/api/v1/money/balance/get/:id](#money-get-6) returns balance transactions by id

#### POST:

7. [https://localhost/api/v1/money/expense/add/](#money-post-7) - adds an expense transaction
8. [https://localhost/api/v1/money/income/add/](#money-post-8) - adds an income transaction
9. [https://localhost/api/v1/money/balance/add/](#money-post-9) - adds a balance transaction
10. [https://localhost/api/v1/money/update/:id](#money-post-10) - updates an expence or income transaction information by id
11. [https://localhost/api/v1/money/balance/update/:id](#money-post-11) - updates a balance transaction information by id
12. [https://localhost/api/v1/money/expense/delete](#money-post-12) - marks an expense tranaction as deleted
13. [https://localhost/api/v1/money/income/delete](#money-post-13) - marks an income transaction as deleted
14. [https://localhost/api/v1/money/balance/delete](#money-post-14) - marks a balance transaction as deleted

<br>

## <a id="health-header"></a> Health and training Information http requests:

#### GET:

1. [https://localhost/api/v1/health/body/get](#health-get-1) - returns health data without those marked as deleted
2. [https://localhost/api/v1/health/training/get](#health-get-2) - returns training data without those marked as deleted
3. [https://localhost/api/v1/health/body/get/:id](#health-get-3) - returns health data by id
4. [https://localhost/api/v1/health/training/get/:id](#health-get-4) - returns training data by id

#### POST:

5. [https://localhost/api/v1/health/body/update](#health-post-5) - updates health data by id
6. [https://localhost/api/v1/health/training/update](#health-post-6) - updates training data by id
7. [https://localhost/api/v1/health/body/add](#health-post-7) - adds health data
8. [https://localhost/api/v1/health/training/add](#health-post-8) - adds training data
9. [https://localhost/api/v1/health/body/delete](#health-post-9) - deletes health data
10. [https://localhost/api/v1/health/training/delete](#health-post-10) - deletes training data

<br>

## <a id="users-header"></a> Users Information http requests:

#### GET:

##### 1. <a id="user-get-1"></a> https://host_name/api/v1/money/users

returns the existing users list excluding users marked as deleted

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

###### [BACK](#users-header)

<br>

##### 2. <a id="user-get-2"></a> https://host_name/api/v1/money/users/:login

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

###### [BACK](#users-header)

<br>

##### 3. <a id="user-get-3"></a> https://host_name/api/v1/money/users/all

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

###### [BACK](#users-header)

<br>

#### POST:

##### 4. <a id="user-post-4"></a> https://host_name/api/v1/money/user

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

###### [BACK](#users-header)

<br>

##### 5. <a id="user-post-5"></a> https://host_name/api/v1/money/user/delete

marks a user by login as deleted:

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

###### [BACK](#users-header)

<br>

## <a id="money-header"></a> Money information http requests:

#### GET:

1. [https://host_name/api/v1/money/get](#money-get-1) - returns existing transactions list excluding those marked as deleted
2. [https://localhost/api/v1/money/expense/get](#money-get-2) - returns expense-type transactions
3. [https://localhost/api/v1/money/income/get](#money-get-3) - returns income-type transactions
4. [https://localhost/api/v1/money/balance/get](#money-get-4) - returns balance-type transactions
5. [https://localhost/api/v1/money/get/:id](#money-get-5) - returns expnese or income transactions by id
6. [https://localhost/api/v1/money/balance/get/:id](#money-get-6) returns balance transactions by id

#### POST:

7. [https://localhost/api/v1/money/expense/add/](#money-post-7) - adds an expense transaction
8. [https://localhost/api/v1/money/income/add/](#money-post-8) - adds an income transaction
9. [https://localhost/api/v1/money/balance/add/](#money-post-9) - adds a balance transaction
10. [https://localhost/api/v1/money/update/:id](#money-post-10) - updates an expence or income transaction information by id
11. [https://localhost/api/v1/money/balance/update/:id](#money-post-11) - updates a balance transaction information by id
12. [https://localhost/api/v1/money/expense/delete](#money-post-12) - marks an expense tranaction as deleted
13. [https://localhost/api/v1/money/income/delete](#money-post-13) - marks an income transaction as deleted
14. [https://localhost/api/v1/money/balance/delete](#money-post-14) - marks a balance transaction as deleted

#### GET:

##### 1. <a id="money-get-1"></a> https://localhost/api/v1/money/expense/add/

returns existing transactions list excluding those marked as deleted

response:

        {
            "status": "succeed",
            "data": {
                "id_value1": {
                    "date": {
                        "_seconds": 1234567645,
                        "_nanoseconds": 888000000
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
                "id_value2": {
                    "category": "NA",
                    "currency": "RUB",
                    "balance": 0,
                    "userId": "D05CfkFE89fzfAJjttRs",
                    "description": "NA",
                    "date": {
                        "_seconds": 5515438562,
                        "_nanoseconds": 342000000
                    },
                    "amount": 13455,
                    "userName": "newuser2",
                    "type": "expense",
                    "timestamp": 5515438562342
                },
            }
        }

###### [BACK](#money-header)

<br>

##### 2. <a id="money-get-2"></a> https://localhost/api/v1/money/expense/get

returns expense-type transactions

response:

        {
            "status": "succeed",
            "data": {
                "id_value1": {
                    "date": {
                        "_seconds": 5515438562,
                        "_nanoseconds": 342000000
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
                "id_value2": {
                    "userId": "D05CfkFE89fzfAJjttRs",
                    "userName": "newuser2",
                    "type": "expense",
                    "date": {
                        "_seconds": 5515438562,
                        "_nanoseconds": 342000000
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

###### [BACK](#money-header)

<br>

##### 3. <a id="money-get-3"></a> https://localhost/api/v1/money/income/get

returns income-type transactions

response:

        {
            "status": "succeed",
            "data": {
                "id_value1": {
                    "currency": "RUB",
                    "userId": "xBUSWsTp9BGnH0uJuTHl",
                    "date": {
                        "_seconds": 1234567645,
                        "_nanoseconds": 888000000
                    },
                    "type": "income",
                    "amount": 15000,
                    "category": "testcategory",
                    "userName": "roman.poludnev",
                    "balance": 0,
                    "timestamp": 1234567645888
                },
                "id_value2": {
                    "amount": 15000,
                    "userName": "roman.poludnev",
                    "type": "income",
                    "userId": "xBUSWsTp9BGnH0uJuTHl",
                    "balance": 0,
                    "date": {
                        "_seconds": 12345677,
                        "_nanoseconds": 888000000
                    },
                    "category": "testcategory",
                    "currency": "RUB",
                    "timestamp": 12345677888
                }
            }
        }

###### [BACK](#money-header)

<br>

##### 4. <a id="money-get-4"></a> https://localhost/api/v1/money/balance/get

returns balance-type transactions

response:

        {
            "status": "succeed",
            "data": {
                "id_value1": {
                "userId": "xBUSWsTp9BGnH0uJuTHl",
                "currency": "RUB",
                "userName": "roman.poludnev",
                "type": "balance",
                "amount": "15000",
                "date": {
                    "_seconds": 12345677,
                    "_nanoseconds": 888000000
                },
                "timestamp": 12345677888
                },
                "id_value2": {
                "userName": "roman.poludnev",
                "currency": "USD",
                "type": "balance",
                "amount": 321,
                "userId": "xBUSWsTp9BGnH0uJuTHl",
                "date": {
                    "_seconds": 1645954860,
                    "_nanoseconds": 0
                },
                "timestamp": 1645954860000
                },
            }
        }

###### [BACK](#money-header)

<br>

##### 5. <a id="money-get-5"></a> https://localhost/api/v1/money/get/:id

returns expnese or income transactions by id

response:

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

###### [BACK](#money-header)

<br>

##### 6. <a id="money-get-6"></a> https://localhost/api/v1/money/balance/get/:id

returns balance transactions by id

response:

        {
            "status": "succeed",
            "data": {
                "date": {
                    "_seconds": 12345677,
                    "_nanoseconds": 888000000
                },
                "currency": "RUB",
                "userName": "roman.poludnev",
                "amount": "15000",
                "userId": "xBUSWsTp9BGnH0uJuTHl",
                "type": "balance",
                "timestamp": 12345677888
            }
        }

###### [BACK](#money-header)

<br>

#### POST:

##### 7. <a id="money-post-7"></a> https://localhost/api/v1/money/expense/add/

adds an expense transaction

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

###### [BACK](#money-header)

<br>

##### 8. <a id="money-post-8"></a> https://localhost/api/v1/money/income/add/

adds an income transaction

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

###### [BACK](#money-header)

<br>

##### 9. <a id="money-post-9"></a> https://localhost/api/v1/money/balance/add/

adds a balance transaction

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

###### [BACK](#money-header)

<br>

##### 10. <a id="money-post-10"></a> https://localhost/api/v1/money/update/:id

updates an expence or income transaction information by id

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

###### [BACK](#money-header)

<br>

##### 11. <a id="money-post-11"></a> https://localhost/api/v1/money/balance/update/BLP0dwaa1Dqs2O43aPdw

updates a balance transaction information by id

request body:

        {
            "amount": 23000
        }

response:

        {
            "status": "succeed",
            "updateTimestamp": 1648670472829
        }

###### [BACK](#money-header)

<br>

##### 12. <a id="money-post-12"></a> https://localhost/api/v1/money/expense/delete

marks an expense tranaction as deleted

request body:

        {
            "id": "Ob61YyaeLFl2C8cjFlGM"
        }

response:

        {
            "status": "deleted",
            "time": 1648669741979
        }

###### [BACK](#money-header)

<br>

##### 13. <a id="money-post-13"></a> https://localhost/api/v1/money/income/delete

marks an income transaction as deleted

request body:

        {
            "id": "X8bZczo1sWAV11bmhU0B",
        }

response:

        {
            "status": "deleted",
            "time": 1648669789339,
        }

###### [BACK](#money-header)

<br>

##### 14. <a id="money-post-14"></a> https://localhost/api/v1/money/balance/delete

marks a balance transaction as deleted

request body:

        {
            "id": "IeRJ3Sgov5NRGrcDcbSG"
        }

response:

        {
            "status": "deleted",
            "time": 1643574252637
        }

###### [BACK](#money-header)

<br>

## <a id="health-header"></a> Health and training Information http requests:

#### GET:

##### 1. <a id="health-get-1"></a> https://localhost/api/v1/health/body/get

returns health data without those marked as deleted

response:

        {
            "status": "succeed",
            "data": {
                "2Dao1HYElsfNyeUWIdDo": {
                    "height": null,
                    "bmi": 0,
                    "weight": 105,
                    "date": {
                        "_seconds": 1234511364,
                        "_nanoseconds": 666000000
                    },
                    "userId": "BTtAA5vYT9UT3WAjxbSP",
                    "timestamp": 1234511364666
                },
                "396baFbGjIRA1mTclhsh": {
                    "date": {
                        "_seconds": 1234511364,
                        "_nanoseconds": 666000000
                    },
                    "bmi": 30,
                    "userId": "BTtAA5vYT9UT3WAjxbSP",
                    "height": 180,
                    "weight": 99,
                    "timestamp": 1234511364666
                },
            }
        }

###### [BACK](#health-header)

<br>

##### 2. <a id="health-get-2"></a> https://localhost/api/v1/health/training/get

returns training data without those marked as deleted

response:

        {
            "status": "succeed",
            "data": {
                "bdYIgYgG4heYjJlUuHIO": {
                    "date": {
                        "_seconds": 12341234,
                        "_nanoseconds": 131000000
                    },
                    "duration": 1345164,
                    "userId": "UNqRdRJZvLcEvSnihpcp",
                    "calories": 100,
                    "title": "row",
                    "load": 9,
                    "timestamp": 12341234131
                },
                "nnGZFsAHz1KCU1rJULAM": {
                    "date": {
                        "_seconds": 12341234,
                        "_nanoseconds": 131000000
                    },
                    "title": "row",
                    "userId": "UNqRdRJZvLcEvSnihpcp",
                    "duration": 1345164,
                    "calories": 100,
                    "load": 9,
                    "timestamp": 12341234131
                }
            }
        }

###### [BACK](#health-header)

<br>

##### 3. <a id="health-get-3"></a> https://localhost/api/v1/health/body/get/:id

returns health data by id

response:

        {
            "status": "succeed",
            "data": {
                "weight": 105,
                "bmi": 0,
                "date": {
                    "_seconds": 1234511364,
                    "_nanoseconds": 666000000
                },
                "height": null,
                "userId": "BTtAA5vYT9UT3WAjxbSP",
                "timestamp": 1234511364666
            }
        }

###### [BACK](#health-header)

<br>

##### 4. <a id="health-get-4"></a> https://localhost/api/v1/health/training/get/:id

returns training data by id

response:

        {
            "status": "succeed",
            "data": {
                "date": {
                    "_seconds": 12341234,
                    "_nanoseconds": 131000000
                },
                "load": 9,
                "userId": "UNqRdRJZvLcEvSnihpcp",
                "calories": 100,
                "duration": 1345164,
                "title": "row",
                "timestamp": 12341234131
            }
        }

###### [BACK](#health-header)

<br>

#### POST:

##### 5. <a id="health-post-5"></a> https://localhost/api/v1/health/body/update

updates health data by id

request body:

        {
            "id": "396baFbGjIRA1mTclhsh",
            "fieldsToUpdate": {
                "weight": 99,
                "bmi": 30,
                "height": 180
            }
        }

response:

        {
            "updateBody": "ok",
            "updateTimestamp": 1643636135835
        }

###### [BACK](#health-header)

<br>

##### 6. <a id="health-post-6"></a> https://localhost/api/v1/health/training/update

updates training data by id

request body:

        {
            "id": "g1FoPPGlYS3XQor7E7MJ",
            "fieldsToUpdate": {
                "load": 20,
                "title": "cycle"
            }
        }

response:

        {
            "updateTraining": "ok",
            "updateTimestamp": 1643636291726
        }

###### [BACK](#health-header)

<br>

##### 7. <a id="health-post-7"></a> https://localhost/api/v1/health/body/add

adds health data

request body:

        {
            "login": "newuser3",
            "timestamp": 1234511364666,
            "weight": 105,
            "height": 180
        }

response:

        {
            "addBody": "ok",
            "id": "I92iBSG04bX1Je5d3Ryo"
        }

###### [BACK](#health-header)

<br>

##### 8. <a id="health-post-8"></a> https://localhost/api/v1/health/training/add

adds training data

request body:

        {
            "login": "test@email.com",
            "title": "row",
            "duration": 1345164,
            "load": 9,
            "timestamp": 12341234131,
            "calories": 100
        }

response:

        {
            "status": "succeed",
            "id": "cgHg8oVpvHXtFGiYOTbf"
        }

###### [BACK](#health-header)

<br>

##### 9. <a id="health-post-9"></a> https://localhost/api/v1/health/body/delete

deletes health data

reqeust body:

        {
            "id": "I92iBSG04bX1Je5d3Ryo"
        }

response:

        {
            "deleteBody": "ok",
            "response": {
                "status": "deleted",
                "time": 1648672372844
            }
        }

###### [BACK](#health-header)

<br>

##### 10. <a id="health-post-10"></a> https://localhost/api/v1/health/training/delete

deletes training data

request body:

        {
            "id": "6UifqhixQQDOe1WZLE3m"
        }

response:

        {
            "deleteTraining": "ok",
            "response": {
                "status": "deleted",
                "time": 1648672356895
            }
        }

###### [BACK](#health-header)

<br>
