import { ADD_TODO, TOGGLE_TODO, VisibilityFilters } from './actions'
import _ from 'lodash';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

let newTodo = (todos) => {
  return {
    id: todos.length + 1,
    text: 'New todo',
    completed: false
  }
}

export function todoApp(state = [], action) {

  if (_.isEmpty(state)) {
    state.push(newTodo(state));
  }

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        _.extend(newTodo(state), {
          text: action.text
        })
      ];
      break;
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item !== action.id) return item;
        return _.extend(item, {
          completed: true
        });
      });
      break;
    default:
      return state
  }

};
