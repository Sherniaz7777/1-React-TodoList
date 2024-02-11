import React, { Component } from 'react'
import './TodoListitem.css'


export default class TodoListitem extends Component {

  render() {
    let clazzDone=''
    if (this.props.done) {
        clazzDone+=' done'
    }

    let clazz=''
    if (this.props.important) {
      clazz+=' imp'

      
    }


    const title=this.props.title
    const Delete=this.props.Delete
    const ImpTodo=this.props.ImpTodo
    const DoneTodo=this.props.DoneTodo

    
    

    return (
        <>
        
        
      <span className='d-flex justify-content-between'  >
      {this.props.editing ? (
            <input
                   type="text"
                   value={this.props.editedText}
                   onChange={this.props.onInputChange}
                 />
               ) : (
               <span onClick={DoneTodo} className={`flex-grow-1 ${clazz} ${clazzDone}` }>{title}</span>
               )}
        
        <button
  className="btn btn-outline-primary"
  onClick={() => {
    if (this.props.editing) {
      // If currently in edit mode, save the edited todo
      const trimmedText = this.props.editedText.trim();
      if (trimmedText !== "") {
        this.props.onSaveEdit(this.props.id);
      } else {
      }
    } else {

      this.props.onEditTodo(this.props.id);
    }
  }}
>
  {this.props.editing ? 'Save' : <i className="bi bi-pencil-square"></i>}
</button>

        <button className='btn btn-outline-danger'  onClick={Delete} ><i className="bi bi-trash-fill"></i></button>
        <button className='btn btn-outline-warning' onClick={ImpTodo}><i className="bi bi-exclamation-lg"></i></button>
      </span>

      </>
    )
  }
}

