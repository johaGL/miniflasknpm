from flask import Flask, render_template
import os
import jinja2

app = Flask(__name__)

@app.route('/',methods=['POST','GET'])
def results():
   data = '{"models": { "name" : "T92",\
       "lab_val" : [ ["kappa", "t92.k_2"], ["theta", "33.6"] ] }}'
   return render_template('results.html', data=data)
   if request.method == 'GET':
      return "in progress...."

if __name__ == "__main__":
   app.run(debug=True)