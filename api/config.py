'''=== Variáveis de configuração do banco ==='''
# Edite essas variáveis para configurar o banco:
mysqlUser = 'root'
mysqlPassword = 'root'
mysqlAddress = 'localhost'
mysqlDb = 'contatos'

'''=== Configurações do app ==='''

class Config:
  SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://" + mysqlUser + r":" + mysqlPassword + r"@" + mysqlAddress + r"/" + mysqlDb
  SQLALCHEMY_TRACK_MODIFICATIONS = False

class Development(Config):
  Debug = True

class Production(Config):
  Debug = False

config = {
  "dev": Development
}