import sys
from flask import *
app = Flask(__name__)

@app.route("/")
def root():
    return "ROOT"

app.run("localhost", 5000)