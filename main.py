from flask import flask

app=flask(_name_)

@app.route('/')
def hello_world():
    return'Hello World!'

if _name_=='_name_':
    app.run(debug=True)