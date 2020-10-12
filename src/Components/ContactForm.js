
import React,{useState,useEffect} from "react";

const ContactForm  =(props) =>{
    const initialFieldValues={
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    var [values ,setValues] =useState(initialFieldValues)
    useEffect(()=>{
     if(props.currentId=='')
     setValues({ ...initialFieldValues})
     else
     setValues({
      ...props.contactObjects[props.currentId]
     })
    }, [props.currentId, props.contactObjects])
    const handleInputChange = e =>{
     var{ name, value} = e.target;
     setValues({
      ...values,
      [name]: value
     })
    }
    const handleFormSubmit = e =>{
     e.preventDefault()
     props.addOrEdit(values);
    }
    return(

        <form autoComplete="off" onSubmit={handleFormSubmit}>
<div className="form-group input-group">
    <div className="input-group-prepend">
        <div className="input-group-text">
           <i className="fas fa-user"> 
           <img width="20" height="20" src="https://image.flaticon.com/icons/svg/2522/2522138.svg" class="loaded"></img>
            </i>
            </div>   
             </div>
             <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}
             onChange={handleInputChange}
             />
</div>
<div className="form-row">
<div className="form-group input-group col-md-6">
    <div className="input-group-prepend">
        <div className="input-group-text">
           <i className="fas fa-mobile-alt">
           <img src="https://image.flaticon.com/icons/png/128/13/13939.png" data-src="https://image.flaticon.com/icons/png/128/13/13939.png" srcset="https://image.flaticon.com/icons/svg/13/13939.svg 4x" alt="Phone numbers call free icon" title="Phone numbers call free icon" width="20" height="20" class="lzy lazyload--done"></img>
               
               </i> 
            </div>   
             </div>
             <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}
              onChange={handleInputChange}
             />
</div>
<div className="form-group input-group col-md-6">
    <div className="input-group-prepend">
        <div className="input-group-text">
           <i className="fas fa-envelope">
           <img src="https://image.flaticon.com/icons/png/128/793/793635.png" data-src="https://image.flaticon.com/icons/png/128/793/793635.png" srcset="https://www.flaticon.com/premium-icon/icons/svg/793/793635.svg 4x" alt="Email premium icon" title="Email premium icon" width="20" height="20" class="lzy lazyload--done"></img>
               
               </i> 
            </div>   
             </div>
             <input className="form-control" placeholder="Email" name="email" value={values.email}
              onChange={handleInputChange}
             />
</div>

</div>
<div className="form-group">
 <textarea className="form-control" placeholder="Address" name="address" value={values.address}
   onChange={handleInputChange}
   />
</div>
<div className="form-group">
 <input type="submit" value={props.currentId == "" ? "save" : "Update"} className= "btn btn-primary btn-block"/>
</div>

        </form>
    );
}
export default ContactForm;