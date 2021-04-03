from flask import Blueprint, render_template, request
from naweid.sequence import Sequence

naweid_bp = Blueprint('naweid', __name__,
                         template_folder='templates',
                         static_folder='static', static_url_path='assets')


@naweid_bp.route('/sequence', methods=["GET", "POST"])
def sequence():
    if request.form:
        return render_template("/sequence.html", sequence=Sequence(int(request.form.get("series"))))
    return render_template("sequence.html", sequence=Sequence(2))
