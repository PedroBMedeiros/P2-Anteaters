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

    return render_template("anthony.html", cube_output=cube_output, a=a, name="Anthony", original=original, sorted=arr)