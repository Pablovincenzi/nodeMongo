
import {connect} from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

export const mongoConnect = async ()=>{
    try{
        
        console.log("Conectando ao mongoDB")
        await(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongo conectado com sucesso")
        
    }catch(error){
        console.log("ERRO CONEXÃO DB",error)
    }
    
}