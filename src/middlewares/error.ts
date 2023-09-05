import { NextFunction,Request,Response } from "express";
import { HttpError } from "../models/http.error";
import mongoose,{mongo} from "mongoose";
import createDebug from 'debug';
const debug = createDebug('ErrorMiddleware');
export const errorHandler=
(error:Error,
    _req:Request,
    res:Response,
    _next:NextFunction)=>{
        debug('Executing error handler middleware');
        
        if (error instanceof HttpError){
           console.error(error.status,error.statusMessage,error.message)
           res.status(error.status);
           res.statusMessage=error.message;
           res.send({
            status:error.status,
           })
           return;
        }
        if (error instanceof mongoose.Error.ValidationError) {
            console.error('400 Bad Request', error.message);
            res.status(400);
            res.statusMessage = 'Bad Request';
            res.send({
              status: '400 Bad Request',
            });
            return;
          }
        
          if (error instanceof mongo.MongoServerError) {
            console.error('406 Not accepted', error.message);
            res.status(406);
            res.statusMessage = 'Not accepted';
            res.send({
              status: '406 Not accepted',
            });
            return;
          }
        
          console.error(error);
          res.status(500);
          res.send({
            error: error.message,
          });
    }