import React, { useState } from 'react';
import './index.css';
import ToDoList from './ToDoList'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
const App = () => { 
  const [inputList, setinputList] = useState("")
  const [listsArr, setlistArr] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  }
  const listOfItems = () => {
    setlistArr((oldarr) => {
      if (inputList === "") {
        alert("Empty Item Cannot Be Added")
        return [...oldarr]
      } else
        return [...oldarr, inputList]
    })
    setinputList("");
  }
  const deleteitems = (id) => {
    setlistArr((oldarr) => {
      return oldarr.filter((arr, index) => {
        return id !== index
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='box'>
          <div className='heading'><h1>ToDo Lists</h1></div>
          <div className="form">
            <input type="text" placeholder="Add Item" onChange={itemEvent} value={inputList}></input>
            <AddCircleSharpIcon className='icon_add' onClick={listOfItems}/> 
          </div>
          <ol>
            {listsArr.map((cval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={cval}
                  del={deleteitems}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;