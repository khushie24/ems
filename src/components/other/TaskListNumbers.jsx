import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='txt flex mt-10 justify-between gap-5 screen'>
    
        <div className='tln rounded-xl w-[45%] py-6 px-9 hover:scale-110 hover:bg-blue-900 border-2 border-blue-400'>
            <h2 className='text-3xl  text-blue-400 font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5  font-medium'>New Task</h3>
        </div>
        <div className='tln rounded-xl w-[45%] py-6 px-9 hover:scale-110 hover:bg-green-900 border-2 border-green-400'>
            <h2 className='text-3xl text-green-400 font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5  font-medium'>Completed Task</h3>
        </div>
        <div className='tln rounded-xl w-[45%] py-6 px-9 hover:scale-110 hover:bg-yellow-500 border-2 border-yellow-400 '>
            <h2 className='text-3xl text-yellow-400 font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5  font-medium'>Accepted Task</h3>
        </div>
        <div className='tln rounded-xl w-[45%] py-6 px-9 hover:scale-110 hover:bg-red-900 border-2 border-red-400'>
            <h2 className='text-3xl text-red-400 font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5  font-medium'>Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumbers