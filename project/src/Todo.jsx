import React from 'react'
import './index.css'
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {

return(
    <li key={props.id}><div>{props.data}<span onClick={() =>{props.remove(props.id)}}><DeleteIcon/></span></div></li>
);
}


export default Todo;
