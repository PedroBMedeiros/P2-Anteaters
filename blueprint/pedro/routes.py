from flask import render_template, Blueprint
pedro = Blueprint('Pedro', __name__)


@pedro.route("/pedro", methods=['GET','POST'])
def pedroRoute():
    return render_template("pedro.html", name="Pedro")