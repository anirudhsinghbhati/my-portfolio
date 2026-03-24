import { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = {
	name: '',
	email: '',
	message: '',
};

function Contact() {
	const [formData, setFormData] = useState(INITIAL_FORM);
	const [statusMessage, setStatusMessage] = useState('');

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const trimmedName = formData.name.trim();
		const trimmedEmail = formData.email.trim();
		const trimmedMessage = formData.message.trim();

		if (!trimmedName || !trimmedEmail || !trimmedMessage) {
			setStatusMessage('Please fill out all fields before sending.');
			return;
		}

		const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
		if (!emailValid) {
			setStatusMessage('Please enter a valid email address.');
			return;
		}

		// Placeholder submit handler until backend/email service is connected.
		console.log('Contact form submission:', {
			name: trimmedName,
			email: trimmedEmail,
			message: trimmedMessage,
		});

		setStatusMessage('Message sent successfully. Thank you for reaching out.');
		setFormData(INITIAL_FORM);
	};

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText('anirudh@example.com');
			setStatusMessage('Email copied to clipboard.');
		} catch {
			setStatusMessage('Could not copy email automatically.');
		}
	};

	return (
		<section id="contact" className="contact-section" aria-label="Contact section">
			<div className="contact-header">
				<h2>Contact Me</h2>
				<p>Open to internships, collaborations, and impactful software projects.</p>
			</div>

			<div className="contact-grid">
				<aside className="contact-info" aria-label="Contact information">
					<h3>Get in touch</h3>

					<p>
						<span aria-hidden="true">@</span>
						<a href="mailto:bhatianirudhsingh592@gmail.com">bhatianirudhsingh592@gmail.com</a>
					</p>

					<p>
						<span aria-hidden="true">GH</span>
						<a href="https://github.com/anirudhsinghbhati" target="_blank" rel="noreferrer">
							Github
						</a>
					</p>

					<p>
						<span aria-hidden="true">in</span>
						<a href="https://www.linkedin.com/in/anirudh-singh-bhati-0a4455274/" target="_blank" rel="noreferrer">
							Linkedin
						</a>
					</p>

				</aside>

				<form className="contact-form" onSubmit={handleSubmit} noValidate>
					<label htmlFor="contact-name">Name</label>
					<input
						id="contact-name"
						name="name"
						type="text"
						value={formData.name}
						onChange={onInputChange}
						placeholder="Your name"
						required
					/>

					<label htmlFor="contact-email">Email</label>
					<input
						id="contact-email"
						name="email"
						type="email"
						value={formData.email}
						onChange={onInputChange}
						placeholder="your.email@example.com"
						required
					/>

					<label htmlFor="contact-message">Message</label>
					<textarea
						id="contact-message"
						name="message"
						value={formData.message}
						onChange={onInputChange}
						placeholder="Tell me about your project or opportunity..."
						rows={5}
						required
					/>

					<button type="submit" className="send-btn">
						Send Message
					</button>

					{statusMessage ? (
						<p className="status-message" role="status" aria-live="polite">
							{statusMessage}
						</p>
					) : null}
				</form>
			</div>
		</section>
	);
}

export default Contact;