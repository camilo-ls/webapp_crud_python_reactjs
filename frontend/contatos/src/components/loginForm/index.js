import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Jumbotron, Form, Button, Modal } from 'react-bootstrap'
import userContext from '../../context/userContext'

import './styles.css'

function Login() {
  const {userData} = useContext(userContext)
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [modalAviso, setModalAviso] = useState(false)
  const [modalMsg, setModalMsg] = useState('')
  let history = useHistory()

  const openModal = (msg) => {
    setModalMsg(msg)
    setModalAviso(true)
  }

  const closeModal = () => {
    setModalAviso(false)
  }

  const login = async () => {
    if (userName === 'creathus' && userPassword === 'admin') {
      localStorage.setItem('auth-token-fake', '12345')
      history.push('/contatos')
      return window.location.reload(false)
    }
    else {
      openModal('Nome de usuário ou senha incorretos!')
    }
  }

  useEffect(() => {
    const checkIfLogged = async () => {
      if (userData.isLogged === true) {
        history.push('/contatos')
        return window.location.reload(false)
      }
    }

    checkIfLogged()
    console.log(userData)
  }, [userData, history])

  return (
    <div className='loginBox'>
      <Jumbotron className='loginForm'>
        <h1>Iniciar sessão</h1>
        <Form>
          <Form.Group controlId='loginForm-userName'>
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control type='text' placeholder='creathus' onChange={e => setUserName(e.target.value)} required/>
          </Form.Group>
          <Form.Group controlId='loginForm-password'>
            <Form.Label>Senha</Form.Label>
            <Form.Control type='password' placeholder='admin' onChange={e => setUserPassword(e.target.value)} required/>
          </Form.Group>
          <Button variant='primary' onClick={login}>
            Entrar
          </Button>
        </Form>
      </Jumbotron>

      <Modal show={modalAviso} onHide={closeModal}>
        <h5>{modalMsg}</h5>
        <Button variant='primary' onClick={closeModal}>
          Ok
        </Button>
      </Modal>
    </div>
  )
}

export default Login