# Webapp com CRUD para o desafio CREATHUS
- API: Flask
- Frontend: ReactJS
- SGBD: MySQL

# Requisitos mínimos:
* MySQL instalado e rodando na máquina, com uma database 'Contatos'
* Python versão >= 3.8
* NodeJS/npm

# Como fazer funcionar

## Baixando o projeto:

Crie uma pasta na sua máquina e, dentro dela, abra o terminal e dê um clone neste repo:

> git clone https://github.com/camilo-ls/webapp_crud_python_reactjs.git

## 1. API
- Versão mínima do Python: 3.8

A API foi feita em um ambiente virtual controlado pelo Pipenv, que funciona como um equivalente do NPM. Logo, você deve ter o Pipenv instalado na sua máquina.

### Instalando Pipenv no Windows:

> pip install pipenv

ou

> pip3 install pipenv

### Instalando Pipenv em distros debian-based:

> sudo apt install pipenv

### Configuração do MySQL:
Dentro da pasta 'api', você pode editar o arquivo config.py para adicionar as credenciais, endereço e porta do banco MySQL (são as variáveis do começo do arquivo)

Vá até dentro do diretório 'api', onde se encontra o arquivo Pipfile. Abra o terminal neste diretório e então digite:

> pipenv install

Após todos os pacotes serem instalados, rode o shell do Pipenv, ainda no diretório do arquivo Pipfile:

> pipenv shell

Finalmente, dentro do shell do Pipenv, inicie a API:

> python main.py

ou

> python3 main.py

A Api será servida na porta 5000 (default do Flask).

## 2. Frontend

Dentro da pasta frontend/contatos, abra o terminal e digite:

> npm install

Aguarde o término da instalação dos arquivos. Depois, para iniciar o webapp em React, basta digitar o comando:

> npm start

O webapp será servido na porta 3000 (default do ReactJS).
