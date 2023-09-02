import os
from flask import *
app = Flask(__name__)

@app.route("/api/v1/blog", methods=["GET"])
def root():
    index = int(request.args.get("index", "0"))
    blogs = list(os.scandir("blogs"))
    
    try:
        with open(f"blogs/{blogs[index]}.md") as blog:
            content = blog.read()
    except FileNotFoundError:
        abort(404)
    
    return len(blogs), content

app.run("localhost", 5000)