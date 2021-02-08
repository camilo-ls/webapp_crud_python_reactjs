import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Contatos from './views/contatos'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={'/contatosApp'}>
      <Contatos />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);