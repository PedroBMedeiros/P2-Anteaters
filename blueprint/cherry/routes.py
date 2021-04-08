from flask import render_template, Blueprint, request
cherry = Blueprint('cherry', __name__)


@cherry.route("/cherry", methods=['GET','POST'])
def cherryRoute():
    class mult:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        mult_output = (b*a)
    cher = mult()

    return render_template("cherry.html", mult_output=mult.mult_output, a=cher.a, b=cher.b, name="cherry")