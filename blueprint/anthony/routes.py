from flask import render_template, Blueprint
anthony = Blueprint('anthony', __name__)

@anthony.route("/anthony")
def anthonyRoute():
    return render_template("Introduction.html", name="Anthony")