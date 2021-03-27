import os
from flask import Flask, render_template, redirect, url_for
from flask import request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
# from __init__ import app
#from models.lessons import menus, TITLE, PROJECTS, select_2_proj, lessons_dict
# import requests
from flask import Flask, render_template, request, url_for
# from werkzeug.utils import redirect

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/')
def home():
    return render_template('index.html')