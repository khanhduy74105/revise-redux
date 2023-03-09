import React from 'react'
import TodoTag from './TodoTag'
import {useSelector} from 'react-redux'

interface Todo {
  content: String,
  complete: Boolean
}
const TodoTagList = () => {
  const todos = useSelector((state:any)=>state.todoReducer.todos)
  return (
    <div className='w-full bg-blue-200 flex-auto mt-2 px-2'>
      {todos.length > 0 ? todos?.map((item:Todo, idx:any)=>{
        return (
          <TodoTag data={item} key={idx}/>
        )
      }): <p className='w-full text-center text-xl font-semibold'>Thêm việc cần làm</p>}
    </div>
  )
}

export default TodoTagList