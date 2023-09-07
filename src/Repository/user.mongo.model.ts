import {Schema, model} from 'mongoose';
import { User } from '../models/user';
const userSchema=new Schema<User>({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:{
            urlOriginal:{type:String},
            url:{type:String},
            mimetype:{type:String},
            size:{type:Number},
        },
        required:true,
    },
    addNotice:[{
        type:Schema.Types.ObjectId,
}],

});
export const UserModel=model('User',userSchema,'users');