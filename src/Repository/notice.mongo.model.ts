import {Schema,model} from 'mongoose';
import { Notice } from '../models/notice';


const noticeSchema=new Schema<Notice>({
    message:{
        type:String,
        required:true,  
    },
image:{ 

        urlOriginal:{type:String},
        url:{type:String},  
        mimetype:{type:String},
        size:{type:Number},
    required:true,
},

owner:{type:Schema.Types.ObjectId,
    ref:'User',
}
})




noticeSchema.set('toJSON',{
    transform(_document, returnObject) {
        returnObject.id = returnObject._id;
        delete returnObject.__v;
        delete returnObject._id;
        delete returnObject.passwd;
      },
    });

    export const NoticeModel=model('notice',noticeSchema,'notices');