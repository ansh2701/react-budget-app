import React from 'react'

import logomark from "../assets/logomark.svg"
import { TrashIcon } from '@heroicons/react/24/solid'

import { Form, NavLink } from 'react-router-dom'


const Nav = ({userName}) => {
  return (
    <nav>
        <NavLink to="/" aria-label='go to home'> 
            <img src={logomark} height={30}/>
            <span>HomeBudget</span>
        </NavLink>
        {userName && 
            <Form method='post' action='/logout' onSubmit={(event) => {
                if(!confirm("User and data will be deleted")){
                  event.preventDefault()
                }
            }}>
                <button className='btn btn--warning'>
                  <span>Delete User</span>
                  <TrashIcon width={20}/>
                </button>
            </Form>
        }
    </nav>
  )
}

export default Nav