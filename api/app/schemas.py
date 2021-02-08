from flask_restful import fields

contatoField = {
  'id': fields.Integer,
  'nome': fields.String,
  'sexo': fields.String,
  'tel': fields.String,
  'email': fields.String
}