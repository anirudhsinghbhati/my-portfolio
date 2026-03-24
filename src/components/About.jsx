import './About.css';

function About() {
	return (
		<section id="about" className="about-section" aria-label="About section">
			<div className="about-header">
				<h2>About Me</h2>
			</div>

			<div className="about-grid">
				<aside className="about-profile" aria-label="Profile panel">
					<img className="avatar" src="/passport.jpeg" alt="Portrait of Anirudh Singh Bhati" />
					<h3>Anirudh Singh Bhati</h3>
					<p>B.Tech Computer Science | 3rd Year</p>
				</aside>

				<article className="about-content">
					<p>
						I am Anirudh, a B.Tech Computer Science student with strong interest in Data Structures,
						Algorithms, Web Development, and problem solving. I enjoy building scalable and
						user-friendly applications that combine clean design with reliable engineering.
					</p>

					<div className="education-card">
						<h4>Education</h4>
						<ul>
							<li>B.Tech in Computer Science, PIET Jaipur | CGPA: 8.31/10.0 (Current)</li>
							<li>Class XII, Vishal Academy Sr. Sec. School | 73.6%</li>
							<li>Class X, Vishal Academy Sr. Sec. School | 81%</li>
						</ul>
					</div>

					<ul className="about-highlights" aria-label="Key highlights">
						<li>Strong problem-solving approach through regular DSA practice.</li>
						<li>Hands-on experience building responsive interfaces with React and JavaScript.</li>
						<li>Growing focus on backend engineering and scalable architecture.</li>
					</ul>

					<a
						href="/ANIRUDH_SINGH_BHATI-PIET23CS017.pdf"
						target="_blank"
						rel="noreferrer"
						className="about-resume-btn"
					>
						Download Resume
					</a>
				</article>
			</div>
		</section>
	);
}

export default About;