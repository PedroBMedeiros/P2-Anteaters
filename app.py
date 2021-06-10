from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'I<+g/P2N$}0GXOf'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///relationships.db'
db = SQLAlchemy(app)
CORS(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))
    todos = db.relationship('Todos', backref='author')


class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    desc = db.Column(db.Text, nullable=False)
    completed = db.Column(db.Boolean)
    date_added = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

@app.route('/add_todo/<username>', methods=['POST'])
def add_todo(username):
    d = request.get_json()
    user = User.query.filter_by(username=username).first()
    todo = Todos(name=d['name'], desc=d['desc'], completed=d['completed'], author=user)
    db.session.add(todo)
    db.session.commit()
    return 'Added Todo', 201

@app.route('/remove_todo', methods=['DELETE'])
def remove_todo():
    d = request.get_json()
    todo = Todos.query.get(int(d['id']))
    db.session.delete(todo)
    db.session.commit()
    return f'Removed Todo', 201

@app.route('/update_todo/<int:id>/<attr>', methods=['PUT'])
def add_todos(id, attr):
    todo = Todos.query.get(id)
    d = request.get_json()
    if attr == 'name':
        todo.name = d['name']
        db.session.commit()
        return 'modified name', 201
    if attr == 'desc':
        todo.desc = d['desc']
        db.session.commit()
        return 'modified desc', 201
    if attr == 'completed':
        todo.completed = d['completed']
        db.session.commit()
        return 'modified completed', 201

@app.route('/todos/<username>', methods=['GET'])
def todos(username):
    for user in User.query.filter_by(username=username):
        todos = []
        for todo in user.todos:
            todos.append({'id':todo.id, 'name': todo.name, 'desc': todo.desc, 'completed': todo.completed, 'date_added': todo.date_added})
        response = jsonify({'todos': todos})
        return response
    return 'Request failed, make sure user exists (case sensitive).', 404

@app.route('/all_todos', methods=["GET"])
def all_todos():
    todo_list = Todos.query.all()
    todos = []
    for todo in todo_list:
        todos.append({'name': todo.name, 'desc' : todo.desc, 'completed' : todo.completed, "date_added": todo.date_added})
    response = jsonify({'all_todos': todos})
    return response, 200

@app.route('/all_users', methods=["GET"])
def all_users():
    user_list = User.query.all()
    users = []
    for user in user_list:
        users.append({'name': user.username})
    response = jsonify({'all_users': users})
    return response, 200

@app.route('/signup', methods=['GET','POST'])
def signup():
    d = request.get_json()
    hashed_password = generate_password_hash(d['password'], method='sha256')
    try:
        new_user = User(username=d['username'], email=d['email'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return 'successful, user created', 201
    except:
        return 'Something went wrong', 401
#login#
@app.route('/login', methods=['GET', 'POST'])
def login():
    d = request.get_json()
    user = User.query.filter_by(username=d['username']).first()
    if user:
        if check_password_hash(user.password, d['password']):
            login_user(user, remember=d['remember'])
            return 'successful', 200

    return 'failed', 406

if __name__ == "__main__":
    app.run(debug=True)

