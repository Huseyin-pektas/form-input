import React, {useState,useEffect} from 'react'
import List from './list';
import Form from './form';

const Contaxt = () => {
 const [listItems, setListItems] = useState([]);

 const handleSubmit = (inputValue) => {
    setListItems([...listItems,inputValue]);
  };
 
 useEffect(()=> {
   console.log('listItems', listItems)
 },[listItems])
   return (
     <div className="App">
      
       <List items={listItems} />
 
       <Form onSubmit={handleSubmit} />
     </div>
   );
 }
 

export default Contaxt
