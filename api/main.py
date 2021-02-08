from app import createApp
from app import db
from flask_migrate import Migrate
from flask_cors import CORS
from app.models import Contato

''' Instanciação da api '''
app = createApp('dev')
CORS(app)

''' Instanciação do migrate '''
# Conectando o migrate ao app e ao db:
Migrate(app, db)

''' Criação do contexto para uso no shell '''
# Essa função serve para passar parâmetros de entidades
# como 'app', 'db' como variáveis de ambiente para serem
# utilizados dinamicamente no shell próprio do Flask no
# ambiente virtual do 'pipenv'. Isso permite que façamos operações
# no banco de dados através daquele shell, dinamicamente.
# Para acessar o shell do Flask: 
# 1. Entre no ambiente de desenvolvimento: 'pipenv shell',
# 2. Entre no shell do Flask: 'flask shell'
@app.shell_context_processor
def shellContext():
  return dict(
    app=app,
    db=db,
    Contato=Contato
  )

# Dá start no app:
app.run(port=5000, debug=True)