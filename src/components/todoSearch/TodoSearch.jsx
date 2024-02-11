import React, { Component } from 'react'

export default class TodoSearch extends Component {


  btns=[
    {name:'all', title:'All'},
    {name:'active', title:'Active'},
    {name:'done', title:'Done'}
  ]
  render() {
    const buttons=this.btns.map(el=>{
      const active=this.props.filter === el.name
      const clazz=active ? 'btn-info' : 
      'btn-outline-secondray'
      return(
        <button key={el.title} 
        onClick={()=>this.props.onSetFilter(el.name)}
         className={`btn ${clazz}`}>
            {el.title}
        </button>

      )
    })
      


    return (
      <div className='d-flex'>
        <input type="text" placeholder='search todo'  className='form-control' onInput={(e) => this.props.handleSearchInput(e.target.value)}/>
        {buttons}

      </div>
    )
  }
}
