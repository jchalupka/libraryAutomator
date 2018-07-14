# Library Automator

Automatically renews books from a library.

## Lambda Usage
- Zip this repository and upload this file to S3.  Create a lambda using this uploaded code.
- Add these environment variables to the lambda:

```
SIGN_IN_PAGE=####,
USER_NAME=####,
PASSWORD=####,
```

- You will also need to setup a chromeless proxy.

Instructions for this: https://github.com/prismagraphql/chromeless/tree/master/serverless#setup

- Then add these environment variables to the lambda (get the values from the previous instruction):

```
endpointUrl=######
apiKey=######
```
- Change the lambda hander to be `src/index.handler`

## Local Usage

- Create a .env file in `src/local` based off of `.env_example`.
- While in local, run `node run.js`.