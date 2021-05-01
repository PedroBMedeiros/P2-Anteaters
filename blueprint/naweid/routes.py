from flask import render_template, Blueprint, request
naweid = Blueprint('naweid', __name__)

@naweid.route("/naweid", methods=['GET','POST'])
def naweidRoute():
    class add:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        add_output = (b+a)

    nawo = add()

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
        
    return render_template("Introduction.html", add_output=nawo.add_output, a=add.a, b=add.b, name="Naweid")
