from flask import render_template, Blueprint, request
import math
pedro = Blueprint('Pedro', __name__)


@pedro.route("/pedro", methods=['GET','POST'])
def pedroRoute():
    class pythag:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        c = math.sqrt(a**2 + b**2)
        pythag_output = c
    class_info = pythag()

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

    return render_template("pedro.html", output=class_info.pythag_output, a=class_info.a, b=class_info.b, name="Pedro", original=original, sorted=arr)