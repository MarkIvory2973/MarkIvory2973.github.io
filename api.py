import sys
from flask import *
from pyngrok import ngrok
app = Flask(__name__)

@app.route("/")
def root():
    return "ROOT"

app.run("localhost", 80)