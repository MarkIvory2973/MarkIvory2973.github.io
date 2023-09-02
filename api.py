import os
from flask import *
app = Flask(__name__)

blogs = list(os.scandir("blogs"))

@app.route("/api/v1/blog", methods=["GET"])
def root():
    id = request.args.get("id", type=int)
    
    try:
        with open(blogs[id-1].path) as blog:
            content = blog.read()
    except FileNotFoundError:
        abort(404)
    
    return content

app.run("localhost", 5000)