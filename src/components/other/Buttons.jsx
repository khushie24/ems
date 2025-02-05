import React from 'react'

const buttons = () => {
  return (
    <div>
      <p>
    <button className='bg-green-500 rounded mb-2 font-medium py-2 px-2 text-sm'>Mark as Completed</button> <br/>
    <button className='bg-red-500 rounded font-medium py-2 px-2 text-sm'>Mark as Failed</button>
     </p>
    </div>
  )
}

export default buttons