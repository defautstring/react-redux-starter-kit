import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'todo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Todo = require('./containers/TodoContainer').default
      const { itemReducer } = require('./modules/todo')
      const { todoListReducer } = require('./modules/todo')

      injectReducer(store, { key: 'itemData', reducer: itemReducer })
      injectReducer(store, { key: 'todoList', reducer: todoListReducer })

      cb(null, Todo)
    }, 'todo')
  }
})