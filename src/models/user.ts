import joi from 'joi';
import { Image } from './image';
import { Notice } from './notice';


export type User={
    id:string;
    userName:string;
    password:string;
    email:string; 
    avatar:Image;
    addNotice:Notice[];

};