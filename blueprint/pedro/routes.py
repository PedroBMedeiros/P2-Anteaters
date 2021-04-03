from flask import render_template, Blueprint

pedro = Blueprint('pedro', __name__)


class Intro:
    name = "Pedro"


intro = Intro()


@pedro.route("/pedro")
def pedroRoute():
    return render_template("Introduction.html", name=intro.name)
