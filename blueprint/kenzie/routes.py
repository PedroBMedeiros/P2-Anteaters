from flask import render_template, Blueprint

kenzie = Blueprint('Kenzie', __name__)

@kenzie.route("/kenzie")
def kenzieRoute():
    return render_template("Introduction.html", name="kenzie")