import express from 'express';
import constants from './config/constants';

const app = express();

app.listen(constants.PORT, err => {
    if(err) throw err;

    console.log(`Server runnign in port: ${constants.PORT}`);
    
});