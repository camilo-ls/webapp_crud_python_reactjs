import React, {useEffect, useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import api from '../../config/api'
import './styles.css'


const TabelaContatosLinha = props => {
  const [id, setId] = useState(undefined)
  const [nome, setNome] = useState(undefined)
  const [sexo, setSexo] = useState(undefined)
  const [tel, setTel] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [editMode, setEditMode] = useState(false)

  const [modalAviso, setModalAviso] = useState(false)
  const [modalMsg, setModalMsg] = useState('')

  const openModal = (msg) => {
    setModalMsg(msg)
    setModalAviso(true)
  }

  const closeModal = () => {
    setModalAviso(false)
    window.location.reload(false)
  }

  const ativarEdit = () => {
    setEditMode(true)
  }

  const salvarEdit = async () => {
    await api.put('/contatos', {
      'id': id,
      'nome': nome,
      'sexo': sexo,
      'tel': tel,
      'email': email
    })
    .then(resp => {
      console.log(resp)
    })
    setEditMode(false)
  }

  const delContato = async () => {
    const payload = {
      data: {
        'id': id
      }
    }
    console.log(payload)
    await api.delete('/contatos', payload)
    .then(resp => {
      console.log(resp)
      if (resp && resp.statusText == 'OK') {
        openModal('Usuário deletado com sucesso!')
      }
    })
    .catch(e => console.log(e))
    console.log()
  }

  useEffect(() => {
    const fetchContato = () => {
      if (id === undefined) {
        setId(props.contato.id)
        setNome(props.contato.nome)
        setSexo(props.contato.sexo)
        setTel(props.contato.tel)
        setEmail(props.contato.email)
      }
    }
    fetchContato()
  }, [])

  return (
    <tr key={id} className='TabelaContatos-Linha'>
        {editMode ?
          <>
            <td className='editContatos'>
              <Form.Control type='text' defaultValue={nome} onChange={e => setNome(e.target.value)} required/>
            </td>
            <td className='editContatos'>
              <Form.Control as='select' defaultValue={sexo} onChange={e => setSexo(e.target.value)} required>
                <option value='I'>Não informado</option>
                <option value='M'>Masculino</option>
                <option value='F'>Feminino</option>
              </Form.Control>
            </td>
            <td className='editContatos'>
              <Form.Control input type='tel' defaultValue={tel} maxLength='9' onChange={e => setTel(e.target.value)} required/>
            </td>
            <td className='editContatos'>
              <Form.Control type='email' defaultValue={email} onChange={e => setEmail(e.target.value)} required/>
            </td>
              <td className='Linha-Opcoes'>
                <Button className='Opcoes-Salvar' variant='primary' onClick={salvarEdit}>Salvar</Button>
                <Button className='Opcoes-Excluir' variant='danger' onClick={delContato}>Excluir</Button>
              </td>
          </>    
        :
          <>
            <td className='editContatos'>{nome}</td>
            <td className='editContatos'>{sexo}</td>
            <td className='editContatos'>{tel}</td>
            <td className='editContatos'>{email}</td>
            <td className='editContatos'>
              <Button className='Opcoes-Editar' variant='warning' onClick={ativarEdit}>Editar</Button>
              <Button className='Opcoes-Excluir' variant='danger' onClick={delContato}>Excluir</Button>
            </td>
          </>
        }
        <Modal show={modalAviso} onHide={closeModal}>
          <h5>{modalMsg}</h5>
          <Button variant='primary' onClick={closeModal}>
            Ok
          </Button>
        </Modal>
    </tr>
  )
}

export default TabelaContatosLinha