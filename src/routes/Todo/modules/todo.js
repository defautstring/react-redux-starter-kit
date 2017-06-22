export const UPDATE_ITEM = 'UPDATE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export function updateItem (item) {
  return {
    type: UPDATE_ITEM,
    payload: item
  }
}

export function addItem (item) {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export function delItem (index) {
  return {
    type: DELETE_ITEM,
    payload: index
  }
}

export const actions = {
  updateItem,
  addItem,
  delItem
}

const ITEM_ACTION_HANDLERS = {
  [UPDATE_ITEM]: (state, action) => action.payload
}

const LIST_ACTION_HANDLERS = {
  [ADD_ITEM]: (state, action) => state.concat(action.payload),
  [DELETE_ITEM]: (state, action) => state.filter((item, index) => {
    return index !== action.payload
  })
}

export function itemReducer (state = '', action) {
  const handler = ITEM_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export function todoListReducer (state = [], action) {
  const handler = LIST_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}