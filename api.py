import os
from flask import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app, origins=["https://markivory2973.github.io", "http://localhost:3000"], supports_credentials=True)

blogs = sorted(os.scandir("blogs"), key=lambda entry: entry.name)
resources = sorted(os.scandir("resources"), key=lambda entry: entry.name)

@app.route("/api/v1/latestblogs", methods=["GET"])
def root_api_v1_latestblogs():
    count = request.args.get("count", type=int)
    
    ret = []
    for blog in blogs[::-1][:count]:
        with open(blog.path) as fBlog:
            ret.append([blog.name.split(".")[0]] + fBlog.read().split("#SPLIT#")[0].split("\n")[:-1])
    
    return jsonify(ret)

@app.route("/api/v1/blogs", methods=["GET"])
def root_api_v1_blogs():
    count = request.args.get("count", type=int)
    page = request.args.get("page", type=int)
    
    ret = []
    for blog in blogs[::-1][count*(page-1):count*page]:
        with open(blog.path) as fBlog:
            ret.append([blog.name.split(".")[0]] + fBlog.read().split("#SPLIT#")[0].split("\n")[:-1])
    
    return jsonify(ret)

@app.route("/api/v1/blog", methods=["GET"])
def root_api_v1_blog():
    id = request.args.get("id", type=int)
    
    with open(blogs[id].path) as fBlog:
        content = fBlog.read().split("#SPLIT#")
        ret = [str(id)] + content[0].split("\n")[:-2] + [content[1]]
    
    return jsonify(ret)

app.run("localhost", 5000)