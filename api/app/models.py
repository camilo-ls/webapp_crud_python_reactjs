from app import db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

# Model da classe 'user' para autenticação
""" class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  username = db.Column(db.String(128), nullable=False, unique=True, index=True)
  password = db.Column(db.String(128), nullable=False)

  def __init__(self, username, password):
    self.username = username
    self.password = password

  def checkPassword(self, password):
    return check_password_hash(self.password, password)

  def __repr__(self):
    return f"User: {self.username}"
 """

# Model da classe contato:
class Contato(db.Model):
  __tablename__ = 'contatos'

  id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  nome = db.Column(db.String(128), nullable=False, index=True)
  sexo = db.Column(db.String(1), nullable=False)
  tel = db.Column(db.String(9), nullable=False)
  email = db.Column(db.String(128), nullable=False)

  def __init__(self, nome, sexo, tel, email):
    self.nome = nome
    self.sexo = sexo
    self.tel = tel
    self.email = email

  # def __repr__(self):
  #   return f"<Contato: {self.nome}"