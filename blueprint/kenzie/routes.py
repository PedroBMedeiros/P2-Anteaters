from flask import render_template, Blueprint, request
import cmath
kenzie = Blueprint('kenzie', __name__)

@kenzie.route("/kenzie", methods=['GET','POST'])
def kenzieRoute():
    class math:
        def __init__(self):
            self._a = 0
            self._b = 0
            self._c = 0
            self._d = 0

        def set_values(self, a, b, c):
            self._a = a
            self._b = b
            self._c = c
            self._d = (b**2) - (4*a*c)

        def get_sols(self):
            sol1 = (-self._b-cmath.sqrt(self._d))/(2*self._a)
            sol2 = (-self._b+cmath.sqrt(self._d))/(2*self._a)
            return [sol1, sol2]

        def get_values(self):
            return [self._a, self._b, self._c]

    class values:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        c = int(request.form.get("c", 1))
    m = math()
    v = values()
    m.set_values(v.a, v.b, v.c)
    sols = m.get_sols()
    values = m.get_values()
    output = 'The solution are {0} and {1}'.format(sols[0], sols[1])

    def bubbleSort(arr):
        n = len(arr)
        for i in range(n-1):
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1] :
                    arr[j], arr[j+1] = arr[j+1], arr[j]

    original = request.form.getlist('input_text[]')
    arr = [1, 2]
    if request.method != 'GET':
        if original[0].isnumeric():
            arr = [int(i) for i in original]
        else:
            arr = original
        bubbleSort(arr)

    return render_template("Introduction.html", output=output, a=values[0], b=values[1], c=values[2], name="Kenzie", original=original, sorted=arr)