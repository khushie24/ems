import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='adminblock w-full h-screen'>
        <h4 className='text-[40px] text-[#081f5c] pt-4 font-bold flex mt- justify-center'>THE ADMIN DASHBOARD</h4>
        <div className=' p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
        </div>
    )
}

export default AdminDashboard