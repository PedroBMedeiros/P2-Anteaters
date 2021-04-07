from flask import render_template, Blueprint, request
cherry = Blueprint('cherry', __name__)


@cherry.route("/cherry", methods=['GET','POST'])
def cherryRoute():

    return render_template("Introduction.html", name="cherry")