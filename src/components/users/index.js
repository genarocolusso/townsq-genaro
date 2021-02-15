import React,{useState, useEffect} from 'react';

import mockusers  from '../../mock/apimock';

const Users = ({carduser}) =>{

const [selectuser, setSelectuser] = useState('')

useEffect(() => {
setSelectuser(carduser) 
}, [carduser])


  return(
    <>
     {  carduser ?? "User Profile here"  }
     </>
  )

}

export default Users