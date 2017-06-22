import React, { Component } from 'react'

export default class Todo extends Component {
  render () {
    return (
      <div>
        <input
          className='form-control'
          style={{ marginBottom: '10px' }}
          type='text' ref='input'
          value={this.props.itemData}
          onChange={(e) => this.handleChange(e)}
        />
        <button
          className='btn btn-primary btn-lg btn-block'
          style={{ marginBottom: '10px' }}
          onClick={(e) => this.handleSubmit(e)}
        >
          添加
        </button>
        <ul className='list-group'>
          {
            this.props.todoList.map((item, index) => {
              return <li
                className='list-group-item'
                key={index}
              >
                {item}
                <button
                  className='btn btn-default'
                  data-index={index}
                  onClick={(e) => this.handleDel(e)}
                >
                  ❌
                </button>
              </li>
            })
          }
        </ul>
      </div>
    )
  }

  handleChange (e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.updateItem(text)
  }

  handleSubmit (e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.addItem(text)
    this.props.updateItem('')
  }

  handleDel (e) {
    const index = e.target.getAttribute('data-index')
    this.props.delItem(Number(index))
  }
}

Todo.propTypes = {
  addItem: React.PropTypes.func.isRequired,
  itemData: React.PropTypes.string.isRequired,
  updateItem: React.PropTypes.func.isRequired,
  delItem: React.PropTypes.func.isRequired,
  todoList: React.PropTypes.array.isRequired
}