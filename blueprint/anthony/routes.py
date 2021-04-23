from flask import render_template, Blueprint, request
anthony = Blueprint('anthony', __name__)

@anthony.route("/anthony", methods=['GET','POST'])
def anthonyRoute():
    class ALG:
        def __init__(self, a = 0):
            self._a = a

        def get_a(self):
            return self._a

        def set_a(self, x):
            self._a = x

    alg = ALG()
    alg.set_a(int(request.form.get("a", 3)))
    a = alg.get_a()
    cube_output = a**3
    return render_template("anthony.html", cube_output=cube_output, a=a, name="Anthony")