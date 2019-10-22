import React, { Component } from 'react'

export class AddTodo extends Component {
  render() {
    return (
      <form>
         <input type="text" name="title" />
      </form>
    )
  }
}

export default AddTodo
