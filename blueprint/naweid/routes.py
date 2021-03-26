from flask import render_template, Blueprint

naweid = Blueprint('naweid', __name__)

@naweid.route("/naweid")
def naweidRoute():
    return render_template("Introduction.html", name="naweid")