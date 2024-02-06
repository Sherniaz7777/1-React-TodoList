import React, { Component } from 'react'

export default class TodoListitem extends Component {

  render() {
    const title=this.props.title
    const Delete=this.props.Delete
    return (
        <>
        
      <span className='d-flex justify-content-between'>
        <span className='flex-grow-1'>{title}</span>
        <button className='btn btn-outline-danger'  onClick={Delete} ><i className="bi bi-trash-fill"></i></button>
        <button className='btn btn-outline-warning'><i className="bi bi-exclamation-lg"></i></button>
      </span>

      </>
    )
  }
}
