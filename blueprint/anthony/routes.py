from flask import render_template, Blueprint, request
anthony = Blueprint('anthony', __name__)

@anthony.route("/anthony", methods=['GET','POST'])
def anthonyRoute():
    class alg:
        a = int(request.form.get("a", 3))
        cube_output = a**3
    res = alg()
    return render_template("anthony.html", cube_output=alg.cube_output, a=alg.a, name="Anthony")