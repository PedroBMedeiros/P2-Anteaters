from flask import render_template, Blueprint
cherry = Blueprint('cherry', __name__)


@cherry.route("/cherry", methods=['GET','POST'])
def cherryRoute():
    return render_template("base.html", name="cherry")