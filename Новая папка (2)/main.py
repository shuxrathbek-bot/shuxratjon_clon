from flask import Flask, render_template

app = Flask(__name__)

@app.rounte("/")
def home(): 
    return render_template("index.html")

@app.rounte("/about")
def home(): 
    return render_template("about.html")

@app.rounte("/contact")
def home(): 
    return render_template("contact.html")

@app.rounte("/login")
def home(): 
    return render_template("login.html")

@app.rounte("/register")
def home(): 
    return render_template("register.html")
