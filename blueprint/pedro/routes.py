from flask import render_template, Blueprint, request
pedro = Blueprint('Pedro', __name__)


@pedro.route("/pedro", methods=['GET','POST'])
def pedroRoute():

    return render_template("Introduction.html", name="pedro")