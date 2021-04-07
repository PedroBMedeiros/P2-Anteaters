from flask import render_template, Blueprint, request
naweid = Blueprint('naweid', __name__)

@naweid.route("/naweid", methods=['GET','POST'])
def naweidRoute():

    return render_template("Introduction.html", name="Naweid")
