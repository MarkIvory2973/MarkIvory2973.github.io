import os
from flask import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins=["https://markivory2973.github.io", "http://localhost:3000"], supports_credentials=True)

blogs = list(os.scandir("blogs"))

@app.route("/api/v1/latestblogs", methods=["GET"])
def root_api_v1_blog():
    count = request.args.get("count", type=int)
    
    try:
        ret = []
        if count <= len(blogs):
            for i in range(-1, -count-1, -1):
                with open(blogs[i].path) as blog:
                    ret.append([i] + blog.read().split("#SPLIT#")[0].split("\n")[:-1])
        else:
            for i in range(-1, -len(blogs)-1, -1):
                with open(blogs[i].path) as blog:
                    ret.append([i] + blog.read().split("#SPLIT#")[0].split("\n")[:-1])
    except FileNotFoundError:
        abort(404)
    
    return jsonify(ret)

app.run("localhost", 5000)