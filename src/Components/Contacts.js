import React,{useEffect,useState} from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts =() =>{
  // var{currentId,setCurrentId}=useState('');
  const[currentId,setCurrentId]=useState(null);
var [contactObjects,setContactObjects] =useState({})
    useEffect(()=>{    
		firebaseDb.child('contacts').on('value', snapshot => {
      if(snapshot.val()!=null){
    setContactObjects({
        ...snapshot.val()
    });
  }
    else
    setContactObjects({})
})  
    }, [])
    const addOrEdit=(obj) =>{ 
      if(currentId === '')
		firebaseDb.child('contacts').push(
      obj,
    err=> {
    if(err)
        console.log(err)
        else
          setCurrentId('') 
    
    })
    else
	 firebaseDb.child(`contacts/${currentId}`).set(
     obj,
      err=> {   
           if(err)
          console.log(err)
          else
          setCurrentId('')
      })
}
const OnDelete = id =>{
  if(window.confirm('Are you sure to delete this record?')){
	firebaseDb.child(`contacts/${id}`).remove(
    
      err=>
      {
  
          if(err)
          console.log(err)

          else
          setCurrentId('')
      }
      
      )
  }
}
 return(
<> 
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-5 text-center">Contact register</h1>
  </div>
</div>
<div className="row"> 
<div className="col-md-5">
<ContactForm {...({addOrEdit,currentId,contactObjects})}/>

    </div>
    <div className="col-md-7">
       <table className="table"> 
       <thead className="thead-light">
           <tr>
               <th>Full Name</th>
               <th>Mobile</th>
               <th>Email</th>
               <th>Action</th>
           </tr>
       </thead>
<tbody>
    {
        Object.keys(contactObjects).map(id=>{
            return  <tr key={id}>
                <td>{contactObjects[id].fullName}</td>
                <td>{contactObjects[id].mobile}</td>
                <td>{contactObjects[id].email}</td>

                <td>
                  {/* <a className="btn text-primary" onClick={() => { setCurrentId(id) }}> */}
                  <button onClick={()=>{ setCurrentId(id) }}> <img width="25" height="25" src="https://www.flaticon.com/premium-icon/icons/svg/3153/3153254.svg" class="loaded"></img> </button>
                    {/* <i className="fas fa-pencil-alt"></i> 
                  </a>
                  <a className="btn btn-danger" onClick={() => { OnDelete(id) }}> */}

                    
                  <button onClick={()=>{ OnDelete(id) }}> <img src="https://image.flaticon.com/icons/png/128/3155/3155746.png" data-src="https://image.flaticon.com/icons/png/128/3155/3155746.png" srcset="https://www.flaticon.com/premium-icon/icons/svg/3155/3155746.svg 4x" alt="Bin premium icon" title="Bin premium icon" width="25" height="25" class="lzy lazyload--done"></img> </button>
            
                    {/* <i className="far fa-trash-alt "></i>
                  </a> */}
                </td>
            </tr>
        })
    }
</tbody>
       </table>
    </div>
    </div>
    </>
    );
}
export default Contacts;