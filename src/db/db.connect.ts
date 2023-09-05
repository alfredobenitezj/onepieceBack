import moongoose from 'mongoose';

import { user,password,db } from '../config/config';
import { Db } from 'mongodb';
export const dbConnect=()=>{
   const uri=`mongodb+srv://${user}:${password}@cluster0.cpjvmhc.mongodb.net/${db}?retryWrites=true&w=majority`}
   