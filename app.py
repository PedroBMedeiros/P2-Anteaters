from flask import Flask, render_template, redirect, url_for, request, session
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField
from wtforms.validators import InputRequired, Email, Length
from flask_wtf.csrf import CSRFProtect, CSRFError
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import requests as rq
import json as js

app = Flask(__name__)
app.config['SECRET_KEY'] = 'I<+g/P2N$}0GXOf'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
# IMPORTANT - GENERATES CSRF TOKEN
csrf = CSRFProtect(app)
csrf.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin, db.Model): #Creates columns inside of the database
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True) #username column
    email = db.Column(db.String(40), unique=True) #email column
    password = db.Column(db.String(20)) #password column