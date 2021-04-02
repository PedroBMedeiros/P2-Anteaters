from flask import render_template, Blueprint

kenzie = Blueprint('Kenzie', __name__)

class Intro:
    name = "Kenzie"

intro = Intro()

@kenzie.route("/kenzie")
def kenzieRoute():
    return render_template("Introduction.html", name=intro.name)