export const addTodo = (todo:String)=>{
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const changeTodo = (id: number)=>{
    return {
        type: 'CHANGE_STATE_TODO',
        payload: id
    }
}

export const deleteTodo = (id: number)=>{
    return {
        type: 'DELETE_STATE_TODO',
        payload: id
    }
}