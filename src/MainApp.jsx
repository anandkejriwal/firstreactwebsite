import React, { useState } from 'react';
//import { Route, Switch } from 'react-router-dom';
import ToDoList from './ToDoList';
import Clock from 'react-digital-clock';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';


function MainApp() {

 

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldValues) => {
      return [...oldValues, inputList];
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrelem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h4 className="clock_color" >
            <Clock format={'hh-mm'} />
          </h4>
          <Button variant="contained" style={{fontSize:"10px", color:"red", border:"1px solid black"}}>
            Primary
          </Button>
          <br />
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />

            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
}

export default MainApp;
