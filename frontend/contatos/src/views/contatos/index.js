import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router'
import userContext from '../../context/userContext'

import loginForm from '../../components/loginForm'
import TableContatos from '../../components/tableContatos'
import { Table } from 'react-bootstrap'

import './styles.css'

const Contatos = () => {
  const [userData, setUserData] = useState({
    isLogged: undefined,
    token: undefined
  })

  const logoff = () => {
    localStorage.setItem('auth-token-fake', '')
    const token = ''
    const isLogged = false
    setUserData({isLogged, token})
  }

  useEffect(() => {
    const checkIfLogged = async () => {
      if (userData.isLogged != true) {
        const authToken = localStorage.getItem('auth-token-fake')
        let token = ''
        let isLogged = undefined
        if (authToken == '12345') {
          token = '12345'
          isLogged = true      
        }
        else {
          localStorage.setItem('auth-token-fake', '')
          token = ''
          isLogged = false
        }
        setUserData({isLogged, token})
      }
    }

    checkIfLogged()
  }, [])

  return (
    <React.Fragment>
      <div className='Logoff'>
        {userData.isLogged === true ?
          <a href='' onClick={logoff}>Logoff</a>
        : null}
      </div>
      <userContext.Provider value={{userData, setUserData}}>
        <Switch>
          <Route exact path='/' component={loginForm}/>
          <Route path='/contatos' component={TableContatos}/>
        </Switch>
      </userContext.Provider>
    </React.Fragment>
  )
}

export default Contatos