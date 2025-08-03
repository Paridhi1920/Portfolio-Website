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
    try:
        data = request.get_json()
        name = data['name']
        sender_email = data['email']
        message_body = data['message']

        msg = Message(
            subject=f"Portfolio Contact: {name}",
            sender=sender_email,
            recipients=[app.config['MAIL_USERNAME']],
            body=message_body
        )

        mail.send(msg)
        print("✅ Email sent!")
        return jsonify({'message': 'Message sent successfully!'}), 200

    except Exception as e:
        print("❌ Email failed:", e)
        return jsonify({'error': str(e)}), 500

@app.route('/download-resume', methods=['GET'])
def download_resume():
    ip = request.remote_addr
    user_agent = request.headers.get('User-Agent')
    log_download(ip, user_agent)
    return send_from_directory(directory='static', path='ParidhiJain_Resume.pdf', as_attachment=True)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
