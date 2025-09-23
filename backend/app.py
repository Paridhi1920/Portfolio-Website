from flask import Flask, request, jsonify, send_from_directory
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv
from analytics import log_download

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {"message": "Backend is running"}

@app.route('/download-resume', methods=['GET'])
def download_resume():
    ip = request.remote_addr
    user_agent = request.headers.get('User-Agent')
    log_download(ip, user_agent)
    return send_from_directory(directory='static', path='ParidhiJain_Resume.pdf', as_attachment=True)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
