from flask_restful import Api
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config

db = SQLAlchemy()

'''== Função de criação do app =='''
def createApp(configName):
  # Instanciação do flask e importação do arquivo de configuração
  app = Flask(__name__)
  app.config.from_object(config[configName])
  
  # Instanciação da api e do bd:
  api = Api(app, prefix='/api/v1')
  db.init_app(app)

  # Importação da classe Contatos e definiçao da rota:
  from app.resources.contatos import Contatos
  api.add_resource(Contatos, '/contatos')

  return app