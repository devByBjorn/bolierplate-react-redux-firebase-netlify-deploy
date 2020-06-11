import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/auth'

/* useDispatch Hook - https://react-redux.js.org/api/hooks - 
  If you have used Redux before useDispatch is sort of like mapsDispatchToProps. Not the same though. Read documentation.

  logout
  Here we have the logout button. On click this button triggers the startLogut out action
  in the auth action file. Logs out the user from the app. 
*/

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h1 data-testid="main-heading">My Web App</h1>
      <button
        data-testid="logout"
        onClick={() => dispatch(startLogout())}>Logout</button>
    </div>
  )
}

export default Header
