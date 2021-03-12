// write your custom hook here to control your checkout form
import {useState} from 'react'

export const useForm = (objectFormData) =>{
    
    const [formData,setFormData]=useState(objectFormData)

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        //console.log(formData)
      };

      return [handleChanges,formData]



}
