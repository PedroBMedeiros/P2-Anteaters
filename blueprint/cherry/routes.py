from flask import render_template, Blueprint, request
import cmath
cherry = Blueprint('Cherry', __name__)

@cherry.route("/cherry", methods=['GET','POST'])
def cherryRoute():
    a = int(request.form.get("a", 1))
    b = int(request.form.get("b", 1))
    c = int(request.form.get("c", 1))

    d = (b**2) - (4*a*c)

    sol1 = (-b-cmath.sqrt(d))/(2*a)
    sol2 = (-b+cmath.sqrt(d))/(2*a)
    output = 'The solution are {0} and {1}'.format(sol1,sol2)
    return render_template("Introduction.html", name="Cherry", output=output, a=a, b=b, c=c)