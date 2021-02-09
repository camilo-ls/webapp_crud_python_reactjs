# Webapp com CRUD para o desafio CREATHUS
- API: Flask
- Frontend: ReactJS
- SGBD: MySQL

# Requisitos mínimos:
* MySQL instalado e rodando na máquina
* Python versão == 3.8 (testado nessa versão)
* NodeJS/npm

# Como fazer funcionar

## Baixando o projeto:

Crie uma pasta na sua máquina e, dentro dela, abra o terminal e dê um clone neste repo:

> git clone https://github.com/camilo-ls/webapp_crud_python_reactjs.git

## 1. API
- Versão mínima do Python: 3.8 (testado)

### AVISO!

É possível desfazer a restrição do pipenv de rodar somente no python 3.8, basta abrir o Pipfile e mudar a linha:

> python_version = "3.8"

para:

> python_version = "3"

Porém faça sob sua responsabilidade.

### Pipenv

A API foi feita em um ambiente virtual controlado pelo Pipenv, que funciona como um equivalente do NPM. Logo, você deve ter o Pipenv instalado na sua máquina.

### Instalando Pipenv no Windows:

> pip install pipenv

ou

> pip3 install pipenv

### Instalando Pipenv em distros debian-based:

> sudo apt install pipenv


Vá até dentro do diretório 'api', onde se encontra o arquivo Pipfile. Abra o terminal neste diretório e então digite:

> pipenv install

Após todos os pacotes serem instalados, rode o shell do Pipenv, ainda no diretório do arquivo Pipfile:

> pipenv shell

### Configuração do MySQL:

Dentro da pasta 'api', você pode editar o arquivo config.py para adicionar as credenciais, endereço e porta do banco MySQL (são as variáveis do começo do arquivo)

Existe também um script chamado **construirBanco.py** que irá construir a database e as tabelas, basta configurar os parâmetros nesse arquivo e executá-lo:

> python construirBanco.py (rode pelo pipenv shell)

### Executando a API:

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

## 3. Testando o app:

Acesse o webapp pelo endereço http://localhost:3000. Você será direcionado para uma página de login. As credenciais são:
- username: creathus
- password: admin

A autenticação é falsa, mas gera um token que fica guardado no localStorage para fins de teste.

Uma vez autenticado, você será redirecionado para a página da lista de contatos, onde poderá fazer as operações CRUD.

## Dúvidas?

Me manda um email:
- sidou.camilo@gmail.com
- cls@icomp.ufam.edu.br
