import { VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

export function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}
