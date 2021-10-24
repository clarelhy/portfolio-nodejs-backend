# My ReactJS Portfolio (Back-end only)
Backend NodeJS implementation for simple data retrieval and email sending.

## Usage 
```
npm install
npm run start
```

App server will run on localhost:3000 and start listening for requests.

## Cross Origin Requests (Not in use for prod build)
This app uses cors to allow cross origin requests, but only from localhost:3000, which is where the front-end part runs on.

## Nodemailer (Sending of Emails)
Credentials for gmail account should be stored in config.json and NOT PUSHED to any online repository.

## Future Enhancements
Pulling data from Firebase Data Store via REST API
