from flask import render_template, Blueprint, request
anthony = Blueprint('anthony', __name__)

@anthony.route("/anthony", methods=['GET','POST'])
def anthonyRoute():
    class ALG:
        def __init__(self, a = 0):
            self._a = a

        # getter method
        def get_a(self):
            return self._a

        # setter method
        def set_a(self, x):
            self._a = x

    alg = ALG()
    alg.set_a(int(request.form.get("a", 3)))
    cube_output = alg.get_a()**3
    a = alg.get_a()
    return render_template("anthony.html", cube_output=cube_output, a=a, name="Anthony")