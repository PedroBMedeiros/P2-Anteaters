from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect, CSRFError
from blueprint.kenzie.routes import kenzie
from blueprint.anthony.routes import anthony
from blueprint.naweid.routes import naweid
from blueprint.pedro.routes import pedro

app = Flask(__name__)
app.config['SECRET_KEY'] = "MY SECRET KEY!"
app.register_blueprint(anthony)
app.register_blueprint(kenzie)
app.register_blueprint(naweid)
app.register_blueprint(pedro)
csrf = CSRFProtect(app)
csrf.init_app(app)
db = SQLAlchemy(app)

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == "__main__":
    # runs the application on the repl development server
    app.run(debug=True)
