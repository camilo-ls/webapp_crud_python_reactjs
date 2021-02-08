import re
from flask.config import ConfigAttribute
from flask_restful import Resource, marshal
from flask import jsonify, make_response
from app.models import Contato
from app import request, db
from app.schemas import contatoField

class Contatos(Resource):
  def get(self):
    contatos = Contato.query.all()
    return marshal(contatos, contatoField)

  def post(self):
    payload = request.only(['nome', 'sexo', 'tel', 'email'])

    _nome = payload['nome']
    _sexo = payload['sexo']
    _tel = payload['tel']
    _email = payload['email']

    novoContato = Contato(_nome, _sexo, _tel, _email)

    db.session.add(novoContato)
    db.session.commit()

    return marshal(novoContato, contatoField)

  def put(self):
    payload = request.only(['id', 'nome', 'sexo', 'tel', 'email'])
    _id = payload['id']
    _nome = payload['nome']
    _sexo = payload['sexo']
    _tel = payload['tel']
    _email = payload['email']

    contato = Contato.query.get(_id)

    if not contato:
      return {'message': 'O contato que você deseja editar não foi encontrado'}

    contato.nome = _nome
    contato.sexo = _sexo
    contato.tel = _tel
    contato.email = _email

    db.session.add(contato)
    db.session.commit()

    return marshal(contato, contatoField)
    

  def delete(self):
    payload = request.only(['id'])
    _id = payload['id']

    contato = Contato.query.get(_id)

    if not contato:
      return {'message': 'Contato não encontrado'}

    db.session.delete(contato)
    db.session.commit()

    return marshal(contato, contatoField)