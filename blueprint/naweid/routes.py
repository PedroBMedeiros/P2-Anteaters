from flask import render_template, Blueprint, request
naweid = Blueprint('naweid', __name__)

@naweid.route("/naweid", methods=['GET','POST'])
def naweidRoute():
    class add:
        a = int(request.form.get("a", 1))
        b = int(request.form.get("b", 1))
        add_output = (b+a)

    nawo = add()

    return render_template("naweid.html", add_output=nawo.add_output, a=add.a, b=add.b, name="Naweid")