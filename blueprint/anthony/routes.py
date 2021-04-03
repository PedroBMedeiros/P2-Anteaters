from flask import render_template, Blueprint
anthony = Blueprint('anthony', __name__)

class Intro:
    name = "Anthony"
    
intro = Intro()

@anthony.route("/anthony")
def anthonyRoute():
    return render_template("Introduction.html", name=intro.name)