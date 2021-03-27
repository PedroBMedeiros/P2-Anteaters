from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from blueprint.kenzie.routes import kenzie
from blueprint.anthony.routes import anthony
from blueprint.naweid.routes import naweid
from blueprint.pedro.routes import pedro

app = Flask(__name__)

app.register_blueprint(anthony)
app.register_blueprint(kenzie)
app.register_blueprint(naweid)
app.register_blueprint(pedro)

db = SQLAlchemy(app)

@app.route('/')
def home():
    return render_template('index.html')