type Action = {
    type: String,
    payload: any
}
interface Todo {
    id: number,
    content: String,
    complete: Boolean
}
interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: []
}

export const todoReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodos = [...state.todos]
            const newTodo: Todo = { id: newTodos.length + 1, content: action.payload, complete: false }
            newTodos.push(newTodo)
            return {
                ...state,
                todos: newTodos
            }
        case "CHANGE_STATE_TODO":
            const newState = state.todos
            newState.forEach((item: any) => {
                if (item.id === action.payload) {
                    item.complete = !item.complete
                }
            })
            console.log(newState)
            return {
                ...state,
                todos: [...newState]
            }
        case "DELETE_STATE_TODO":{
                const newState = [...state.todos.filter((item:any)=> item.id !== action.payload)]
                console.log(newState)
                return {
                    ...state,
                    todos: [...newState]
                }
            }
        default:
            return state
    }
}