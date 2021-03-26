from flask import render_template, Blueprint

pedro = Blueprint('pedro', __name__)

@pedro.route("/pedro")
def pedroRoute():
    return render_template("Introduction.html", name="pedro")