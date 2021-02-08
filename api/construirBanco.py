# Esse script irá construir a database e a table 'Contatos' para que o webapp funcione

import mysql.connector

# Variáveis de acesso:
host = 'localhost'
porta = '3306'
login = 'root'
senha = 'root'

# Configuração de acesso ao banco de dados:
print('> Conectando ao banco...', end='')
mysqlCon = mysql.connector.connect(host=host, port=porta, user=login, password=senha)
mysqlCursor = mysqlCon.cursor()
print(' SUCESSO!')

# Criando a database
print('> Criando a database...', end='')
try:
  mysqlCursor.execute(
    "CREATE DATABASE contatos"
  )
  print(' SUCESSO!')
except:
  print(' FALHOU!')
  print('>>> Verifique se a database já existe!')

# Desconectando e conectando diretamente na database criada:
mysqlCursor.close()
mysqlCon.close()

print('> Conectando ao banco na database correta...', end='')
mysqlCon = mysql.connector.connect(host=host, port=porta, user=login, password=senha, database='contatos')
mysqlCursor = mysqlCon.cursor()
print(' SUCESSO!')

# Criando a table 'contatos':
print('> Criando a tabela...', end='')
try:
  mysqlCursor.execute(
    "CREATE TABLE contatos (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(128) NOT NULL, sexo VARCHAR(1) NOT NULL, tel VARCHAR(9) NOT NULL, email VARCHAR(128) NOT NULL"
  )
  print(' SUCESSO!')
except:
  print(' FALHOU!')
  print('>>> Verifique se a tabela já existe!')

# Fechando as conexões:
mysqlCursor.close()
mysqlCon.close()

print('> Finalizado!')
