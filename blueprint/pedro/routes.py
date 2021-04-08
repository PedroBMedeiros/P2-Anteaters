from flask import render_template, Blueprint, request
import math
pedro = Blueprint('Pedro', __name__)


@pedro.route("/pedro", methods=['GET','POST'])
def pedroRoute():
    class pythag:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        c = math.sqrt(a**2 + b**2)
        output = c
    class_info = pythag()
    return render_template("pedro.html", output=class_info.output, a=class_info.a, b=class_info.b, name="Pedro")

    # return render_template("Introduction.html", name="pedro")