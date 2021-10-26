# My ReactJS Portfolio (Back-end only)

Backend NodeJS implementation for simple data retrieval and email sending.

## Usage

```
npm install
npm run start
```

App server will run on `localhost:3000` (by default) and start listening for requests.

### Development

Change `ENVIRONMENT` in .env to `DEVELOPMENT`.

### Production

Change `ENVIRONMENT` in .env to `PRODUCTION`.\
App server will run on `localhost:3000` (by default) and start listening for requests.

## Cross Origin Requests

This app uses cors to allow cross origin requests, port configured in `.env`.

## Nodemailer (Sending of Emails)

Credentials for gmail accounts should be stored in .env.

## Future Enhancements

Pulling data from Firebase Data Store via REST API

## Compulsory Contents for .env

### Do NOT push .env (due to sensitive content)

`EMAIL=dummyEmail@gmail.com`, used to send email\
`EMAIL_PW=dummyEmail's password`\
`MY_EMAIL=yourEmail@gmail.com`, used to receive visitor's message\
`NAME=Your Sign-off Name on Email`\
`APP_PORT=3000` or whatever port you like\
`WEB_PORT=5000` for CORS configuration\
`ENVIRONMENT=PRODUCTION` or DEVELOPMENT\
