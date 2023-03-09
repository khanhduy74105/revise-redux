import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTodo, deleteTodo } from '../actions/TodoActions'
const TodoTag = ({ data }: any) => {
  const dispatch = useDispatch()
  const onChangeState = (id: number) => {
    dispatch(changeTodo(id))
  }
  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }
  return (
    <div className='w-full flex justify-between px-5 py-1 my-1 bg-blue-500 items-center'>
      <p className='w-3/5 break-words text-white'>{data.content}</p>
      <span className={`h-fit cursor-pointer bg-white px-2 ${data.complete ? 'text-green-500' : 'text-yellow-600'}`} onClick={() => onChangeState(data.id)}>{data.complete ? 'Hoàn thành' : 'Đang thực hiện'}</span>
      <span className='w-10 h-fit text-red-300 font-semibold cursor-pointer' onClick={() => onDeleteTodo(data.id)}>Xóa</span>
    </div>
  )
}

export default TodoTag