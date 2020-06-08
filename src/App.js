import React from "react"//importing react
import ReactDOM from "react-dom"
import ToDoItem from "./ToDoItem.js"//importing files from 
import './App.css';

import todosData from "./todosData.js"



class  App extends React.Component { //class  component

    constructor() {
      super()
      this.state={//state
        todo:todosData
      
        
      }
     this.handleChange=this.handleChange.bind(this)//binding handlechange
     
  }
 
 
  handleChange(id) {
    this.setState(prevState => {//setState 
        const updatedTodos = prevState.todo.map(todos => {
            if (todos.id === id) {
              return {
                
                ...todos,
                completed: !todos.completed
            }
            }
            return todos
        })
        return {
            todo: updatedTodos
        }
    })
}


  render(){
    
  const ToDoItems=this.state.todo.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)//storing varbels from todoData
  const styleHead = {
    fontStyle: "italic",
   
   textAlign:"center",
   
}

return(
 
<div>
<h1 style={styleHead}>To Do List</h1>  


<div className="todo-list">
 


{ToDoItems}

</div>
</div>
)
 
}
}





export default App;
