import { BASE_URL } from '../../config/config.js';
import { oauth, token } from '../../config/oauth.js';
import status from 'http-status';
import request from 'request-promise';
import dotenv from 'dotenv';

const version = '1.1';
const endpoint = 'friends/list.json';

const Url = `${BASE_URL}/${version}/${endpoint}`;

export const friendsList = async (req, res, next) => {

    if ( req.query.id || req.query.name ) {
        
        // condition ? IfTrue : IfFalse
        let request_data = req.query.id ? 
        { url: Url, method: 'GET', data: { user_id: req.query.id } } : 
        { url: Url, method: 'GET', data: { screen_name: req.query.name } };
        /*
        let request_data;
        if (req.query.id) {
            request_data = {
                url: Url,
                method: 'GET',
                data: { user_id: req.query.id }
            };
        } else if (req.query.name) {
            request_data = {
                url: Url,
                method: 'GET',
                data: { screen_name: req.query.name }
            };
        }
        */
        
        
        const options = {
            url: request_data.url,
            method: request_data.method,
            form: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data, token)),
        };

        console.log(options);

        try {
            
            const result = await request(options);
            
            const Rs = JSON.parse(result);

            const response = {
                code: 200,
                message: 'sucess',
                response: Rs
            };

            res.status(status.OK).send(response);

        } catch (err) {

            next(error);

            if (error.response){

                console.log("Response: ");
                console.log(error.response);
                
            } else if(error.request){
                
                console.log("Request: ");
                console.log(error.request);
                
            } else if(error.message){
                
                console.log("Message: ");
                console.log(error.message);
                
            }
        }
        
    } else {

        res.status(400).send({ code: 400, status: 'Bad Request', message: 'Missing or wrong paramemter' });
        console.log(status['400_MESSAGE']);
    }

};