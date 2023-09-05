import { Image } from "./image";
import { User } from "./user";


export type Notice={
    id:string;
    message:string;
    image:Image;
    owner:User
    
}