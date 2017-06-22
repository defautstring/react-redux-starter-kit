import { connect } from 'react-redux'
import { updateItem, addItem, delItem } from '../modules/todo'
import Todo from '../components/Todo'

const mapDispatchToProps = {
  updateItem,
  addItem,
  delItem
}

const mapStateToProps = (state) => ({
  itemData: state.itemData,
  todoList: state.todoList
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)