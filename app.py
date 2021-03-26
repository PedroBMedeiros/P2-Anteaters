from flask import Flask, render_template

from blueprint.kenzie.routes import kenzie
from blueprint.anthony.routes import anthony
from blueprint.naweid.routes import naweid
from blueprint.pedro.routes import pedro

app = Flask(__name__)

app.register_blueprint(anthony)
app.register_blueprint(kenzie)
app.register_blueprint(naweid)
app.register_blueprint(pedro)

@app.route("/")
def Home():
    return render_template('Index.html')
if __name__ == "__main__":
    app.run(debug=True)