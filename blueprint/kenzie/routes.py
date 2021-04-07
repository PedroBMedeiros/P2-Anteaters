from flask import render_template, Blueprint, request
import cmath
kenzie = Blueprint('kenzie', __name__)

@kenzie.route("/kenzie", methods=['GET','POST'])
def kenzieRoute():
    class math:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        c = int(request.form.get("c", 1))
        d = (b**2) - (4*a*c)
        sol1 = (-b-cmath.sqrt(d))/(2*a)
        sol2 = (-b+cmath.sqrt(d))/(2*a)
        output = 'The solution are {0} and {1}'.format(sol1,sol2)
    class_info = math()
    return render_template("Introduction.html", output=class_info.output, a=class_info.a, b=class_info.b, c=class_info.c, name="Kenzie")