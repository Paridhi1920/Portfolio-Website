from flask import Flask, request, jsonify, send_from_directory
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv
from analytics import log_download

load_dotenv()

app = Flask(__name__)
CORS(app)

# Email config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
mail = Mail(app)

@app.route('/')
def home():
    return {"message": "Backend is running"}

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    msg = Message(
        subject=f"New Portfolio Message from {name}",
        sender=email,
        recipients=[os.getenv("MAIL_USERNAME")],
        body=f"Name: {name}\nEmail: {email}\n\n{message}"
    )
    mail.send(msg)
    return jsonify({"success": True, "message": "Message sent successfully."})

@app.route('/download-resume', methods=['GET'])
def download_resume():
    log_download(request.remote_addr)
    return send_from_directory(directory='static', path='ParidhiJain_Resume.pdf', as_attachment=True)

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000)) 
    app.run(host='0.0.0.0', port=port)

