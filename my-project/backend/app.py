from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask Backend!"})

@app.route('/data', methods=['POST'])
def data():
    data = request.json
    return jsonify({"received": data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
