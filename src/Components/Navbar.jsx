import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <div>
      <span>MySide</span>
      </div>
      <div className='menu'>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/cart'>Cart</Link>
      </div>
      <div>
        <h3>Total Carts 0</h3>
      </div>
    </div>
  )
}

export default Navbar
