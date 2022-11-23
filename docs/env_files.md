# ENV Files
&nbsp;
####
## Backend
&nbsp;
####
`.env`
&nbsp;
####
```
# environment type
NODE_ENV=develop

# application configuration
APP_PORT=4001
APP_URL=http://localhost:4001

# cors urls list
CORS_URLS_LIST=http://127.0.0.1:4000,http://localhost:4000,http://127.0.0.1:4001,http://localhost:4001

# jwt credentials
ACCESS_TOKEN_SECRET=rBxTSXzaHScWmcKWcvwWMAqyCGzdWaFM
ACCESS_TOKEN_EXPIRY=1800s

# database configuration
DB_HOST=login-db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_DATABASE=login
DB_DIALECT=postgres
```

Where:
- environment type : 
    - NODE_ENV : environment type can be develop / staging / production
- application configuration
    - APP_PORT : port number for start backend
    - APP_URL : full url backend host
- cors urls list : 
    - CORS_URLS_LIST : full urls list for cors requests
- jwt credentials : 
    - ACCESS_TOKEN_SECRET : random hash string used for jwt encoding
    - ACCESS_TOKEN_EXPIRY : life time for jwt
- database configuration :
    - DB_HOST : database host
    - DB_PORT : database port
    - DB_USER : database username
    - DB_PASSWORD : database password
    - DB_DATABASE : database name
    - DB_DIALECT : database dialect and the value in this case is `postgres`
&nbsp;
&nbsp;
####
## Frontend
&nbsp;
####
`.env`
&nbsp;
####
```
PORT=4000
```