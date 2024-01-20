import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const items = useSelector((state) => state.cart)


  return (
    <div className='navbar ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
      <div>
        <span>MySide</span>
      </div>
      <div className='menu' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/cart'>Cart</Link>
      </div>
      <div>
        <h3>Total Carts {items.length}</h3>
      </div>
    </div>
  )
}

export default Navbar
