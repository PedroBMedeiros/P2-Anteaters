from flask import render_template, Blueprint

naweid = Blueprint('naweid', __name__)

class Intro:
    name = "Naweid"

intro = Intro()

@naweid.route("/naweid")
def naweidRoute():
    return render_template("Introduction.html", name=intro.name)