import {ErrorRequestHandler} from 'express';
import {ValidationError} from 'yup';
interface ValidationErrors{
    [key:string]:string[];
}
const errrorHandler:ErrorRequestHandler=(error,request,response,next)=>{
    if(error instanceof ValidationError){
        let errors:ValidationErrors={};
        error.inner.forEach(err=>{
             errors[err.path]=err.errors
         });    
         return response.status(400).json({mesage:'Validation Error',errors});
      
    }
    console.error(error);
    return response.status(500).json({mesage:'Internal server error'});
};
export default errrorHandler;