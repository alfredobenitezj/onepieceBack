import { NoticeModel } from "./notice.mongo.model";
import createDebug from "debug";
import { Notice } from "../models/notice";
import { Repo } from "./Repo";
import { HttpError } from "../models/http.error";
const debug=createDebug('notice:repository');
export class NoticeRepo implements Repo<Notice>{
    constructor(){
        debug('NoticeRepo ')
    }
    async query(): Promise<Notice[]>{
return NoticeModel.find()
.populate('owner')
.exec();
    } 
    async queryByid(id:string):Promise<Notice>{
    const notice=await NoticeModel.findById(id).exec();
    if(notice===null){
        throw new HttpError(404,'Not Found','Notice not found');
    } 
    return notice;   
    }
    async search(queryObj: { key: string; value: unknown }): Promise<Notice[]> {
        const result = await NoticeModel.find({ [queryObj.key]: queryObj.value }).exec();
        return result;
      }
    
    async create(data:Omit<Notice,'id'>):Promise<Notice>{
        const notice=new NoticeModel(data);
        await notice.save();
        return notice;
    }
    async update(id:string,data:Partial<Notice>):Promise<Notice>{
        const updatedNotice=await NoticeModel.findByIdAndUpdate(id,data,{new:true}).exec();
        if (updatedNotice===null){
            throw new HttpError(404,'Not found','Bad Id for  the update');
        }
        return updatedNotice;
        }
        async delete(id:string):Promise<void>{
            const deletedNotice=await NoticeModel.findByIdAndDelete(id).exec();
            if(deletedNotice===null){
                throw new HttpError(404,'Not found','Bad Id for the delete');
            }
    }
}
