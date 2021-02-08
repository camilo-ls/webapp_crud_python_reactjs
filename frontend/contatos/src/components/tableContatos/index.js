import React, {useContext, useEffect, useState} from 'react'
import {Table, Button, Spinner, Form, Modal } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import userContext from '../../context/userContext'
import api from '../../config/api'
import './styles.css'

import TabelaContatosLinha from '../tableContatos-Linha'

const TableContatos = () => {
  const {userData, setUserData} = useContext(userContext)
  const [nome, setNome] = useState(undefined)
  const [sexo, setSexo] = useState('I')
  const [tel, setTel] = useState(undefined)
  const [email, setEmail] = useState(undefined)

  const [modalAviso, setModalAviso] = useState(false)
  const [modalMsg, setModalMsg] = useState('')

  const [listaMudancas, setListaMudancas] = useState(0)
  const [listaContatos, setListaContatos] = useState(undefined)

  let history = useHistory()

  const abrirAviso = msg => {
    setModalMsg(msg)
    setModalAviso(true)
  }

  const fecharAviso = () => {
    setModalAviso(false)
    window.location.reload(false)
  }

  const addContato = async () => {
    const payload = {
      'nome': nome,
      'sexo': sexo,
      'tel': tel,
      'email': email
    }

    await api.post('/contatos', payload)
    .then(resp => {
      if (resp && resp.statusText == 'OK') {
        abrirAviso('Usuário adicionado com sucesso!')
        setListaMudancas(listaMudancas + 1)
      }  
    })
    .catch(e => console.log(e))
  }

  useEffect(() => {
    
    const fetchLista = async () => {
      if (listaContatos === undefined) {
        await api.get('/contatos')
        .then(resp => setListaContatos(resp.data))
        .catch(e => console.log(e))
      }
    }
    fetchLista()
  }, [listaMudancas])

const montarTabela = contato => {
  return (
    <TabelaContatosLinha contato={contato}/>
  )
}
  return (    
    <div className='tabelaContatos' key={listaMudancas}>
      {userData && userData.isLogged ?
        <>
          <div className='tabelaContatos-add'>
            <h1>Adicionar contato</h1>
            <Form className='addContatos'>
              <Form.Group controlId='addContatos'>
                <Form.Label>Nome</Form.Label>
                <Form.Control type='text' placeholder='Nome completo' onChange={e => setNome(e.target.value)} required/>
              </Form.Group>
              <Form.Group controlId='addContatos'>
                <Form.Label>Sexo</Form.Label>
                <Form.Control as='select' className='' onChange={e => setSexo(e.target.value)} required>
                  <option value='I'>Não informado</option>
                  <option value='M'>Masculino</option>
                  <option value='F'>Feminino</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='addContatos'>
                <Form.Label>Telefone</Form.Label>
                <Form.Control input type='tel' placeholder='9XXXXYYYYY' maxLength='9' onChange={e => setTel(e.target.value)} required/>
              </Form.Group>
              <Form.Group controlId='addContatos'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='nome@email.com' onChange={e => setEmail(e.target.value)} required/>
              </Form.Group>
              <Button className='buttonAdd' onClick={addContato}>Adicionar</Button>
            </Form>
          </div>
          <hr/>
          <h1>Lista de Contatos</h1>
          <div className='tabelaContatos-Tabela'>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  <th className='Thead-Nome'>Nome</th>
                  <th className='Thead-Sexo'>Sexo</th>
                  <th className='Thead-Tel'>Telefone</th>
                  <th className='Thead-Email'>Email</th>
                  <th className='Thead-Opcoes'>Opções</th>
                </tr>
              </thead>
              <tbody>
                {listaContatos ? listaContatos.map(montarTabela) : null}
              </tbody>
            </Table>
          </div>
        </>
    
    
      : 
      <>
        <h1>Você precisa estar logado para acessar esta página.</h1>
        <a href='/contatosApp'>Clique aqui para fazer login</a>
      </>
      }      
      
      <Modal show={modalAviso} onHide={fecharAviso}>
        <h5>{modalMsg}</h5>
        <Button variant='primary' onClick={fecharAviso}>
          Ok
        </Button>
      </Modal>
    </div>
  )
}

export default TableContatos