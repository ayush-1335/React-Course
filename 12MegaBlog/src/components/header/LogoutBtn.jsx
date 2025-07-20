import React from 'react'
import { useDispatch } from 'react-redux'
import authServies from '../../appwrite/auth' //error
import { logout } from '../../store/authSlice' //error

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authServies.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default LogoutBtn