from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/rebirth')
def rebirth():
    return render_template('rebirth.html')

if __name__ == "__main__":
    app.run()
    