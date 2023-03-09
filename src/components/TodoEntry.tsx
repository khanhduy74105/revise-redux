import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/TodoActions'

const TodoEntry = () => {
  const [todo, setTodo] = useState<String>('')
  const dispatch = useDispatch()
  const onAddTodo = ()=>{
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (
    <div className='w-full flex justify-start items-center gap-4 mt-3'>
        <input type="text" className='outline-none w-1/2 px-2 py-1' onChange={e=>setTodo(e.target.value)} value={todo as string} onKeyUp={e => {
          if (e.keyCode == 13) {
            onAddTodo()
          }
        }}/>
        <button className='px-2 py-1 bg-blue-500 border rounded-lg' onClick={()=>onAddTodo()}>Thêm</button>
    </div>
  )
}

export default TodoEntry