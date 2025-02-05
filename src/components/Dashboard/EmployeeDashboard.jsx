import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='emp'>
    <div className=''>
    <h3 className='text-[30px] text-[#081f5c] font-bold flex justify-center'>THE EMPLOYEE DASHBOARD</h3>
    
    </div>
    <div className='p-10 empmain h-screen'>
        
        <Header changeUser={props.changeUser} span={props.data.firstName} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  </div>
  )
}

export default EmployeeDashboard