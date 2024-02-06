import React, { Component } from 'react'

export default class TodoSearch extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" placeholder='search todo'  className='form-control'/>
        <button className='btn btn-info'>All</button>
        <button className='btn btn-outline-secondray'>Active</button>
        <button className='btn btn-outline-secondray'>Done</button>
      </div>
    )
  }
}
