import React, { useState } from 'react';
import './index.css'
import Todo from './Todo'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const App = () => {

//State Variables and Set State Methods

  // Deals with the current Value
  const [currValue, setCurrValue] = useState('');
  // Deals with the array
  const [array, setArray] = useState([]);

  // Triggers OnChange of the Input Field 
  const inputItem = (event) => {
      setCurrValue(event.target.value);
  }
  // Triggers OnSubmit of the Form
  const handleForm = (e) => {
      e.preventDefault();
      setArray((prev)=> {
        return[...prev, currValue]
      })
  }

  const  removeTodo= (id) => {
    
    setArray((prev)=>{
        return prev.filter((point, index)=>{
          return id!=index;
        })
    })
  }

  
  return(
    <div className="main_body">

      <h1 className='main_head'>TODO APP</h1>
      <form className='main_text' onSubmit={handleForm}>
        <input type='text' placeholder='Enter Todo Item' name='input_field' onChange={inputItem}/>
        <Button variant="contained" className="changeGreen" type="submit"><AddIcon/></Button>
        
        
      </form>  
      <div className='todoItems'>

      <ul>
        {array.map((value, index) => {
            
            return( <Todo 
            id= {index}
            data={value}
            remove={removeTodo}/>);  
        })}
        
    </ul>
         
      </div>      

    </div>
  );
}

export default App;