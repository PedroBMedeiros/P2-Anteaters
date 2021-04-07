from flask import render_template, Blueprint, request
import cmath
anthony = Blueprint('anthony', __name__)

@anthony.route("/anthony", methods=['GET','POST'])
def anthonyRoute():
    a = int(request.form.get("a", 3))
    cube_output = a**3
    return render_template("anthony.html", cube_output=cube_output, a=a)