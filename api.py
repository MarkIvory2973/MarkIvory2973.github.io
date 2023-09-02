import os
from flask import *
app = Flask(__name__)

blogs = list(os.scandir("blogs"))

@app.route("/api/v1/blog", methods=["GET"])
def root():
    index = int(request.args.get("index", "0"))
    
    try:
        with open(blogs[index].path) as blog:
            content = blog.read()
    except FileNotFoundError:
        abort(404)
    
    return content

app.run("localhost", 5000)