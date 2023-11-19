import { useDispatch } from 'react-redux'
import './App.css'
import { login } from 'reducers/auth'
import { ThunkDispatch } from 'redux-thunk'
import { RootStoreStateProps } from 'types'
import { AnyAction } from '@reduxjs/toolkit'

function App() {
  const dispatch = useDispatch() as ThunkDispatch<RootStoreStateProps, unknown, AnyAction>

  return (
    <>
      <button
        onClick={async () => {
          await dispatch(login({ email: 'email', password: 'password' }))
        }}
      >
        Click
      </button>
    </>
  )
}

export default App
