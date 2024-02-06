import React, { Component } from 'react'

export default class TodoAdd extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" placeholder='add todo' className='form-control' />
        <button className='btn btn-info'>Add</button>
      </div>
    )
  }
}
