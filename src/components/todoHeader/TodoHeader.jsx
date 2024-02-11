import React, { Component } from 'react'

export default class TodoHeader extends Component {
  
  render() {
    const done=this.props.done
    const all=this.props.all
    return (
      <div className='d-flex justify-content-between'>
         <h3>Todo List</h3>
         <h4>{all} more todo {done} done</h4>
    </div>
    )
  }
}
