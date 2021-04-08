from flask import render_template, Blueprint
naweid = Blueprint('naweid', __name__)

@naweid.route("/naweid", methods=['GET','POST'])
def naweidRoute():
    return render_template("base.html", name="Naweid")
