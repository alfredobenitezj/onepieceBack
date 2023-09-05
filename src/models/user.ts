import joi from 'joi';
import { Image } from './image';
import { Notice } from './notice';
import { password } from '../config/config';


export type User={
    id:string;
    userName:string;
    password:string;
    email:string; 
    avatar:Image;
    addNotice:Notice[];

};


export const userSchema=joi.object<User>({
    userName:joi.string().required(),
    email:joi.string().email().required().messages({
        'string.base': `"email" debe ser tipo 'texto'`,
        'string.email': `El "email"  no es válido`,
        'string.empty': `El "email" no debe ser vacío`, 
    }),
    password:joi.string().required().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
});
