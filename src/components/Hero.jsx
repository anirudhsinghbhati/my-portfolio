import './Hero.css';

function Hero() {
	const scrollToProjects = (event) => {
		event.preventDefault();
		const section = document.getElementById('projects');

		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<section id="home" className="hero-section" aria-label="Hero section">
			<div className="hero-content">
				<h1>
					Hi, I am <span>Anirudh</span>
				</h1>
				<h2>Software Developer</h2>
				<p className="hero-tagline">
					Passionate about Data Structures, web development, and building
					scalable, user-friendly applications that solve real-world problems.
				</p>

				<div className="hero-actions">
					<a href="#projects" onClick={scrollToProjects} className="btn primary">
						View Projects
					</a>
					<a
						href="/ANIRUDH_SINGH_BHATI-PIET23CS017.pdf"
						target="_blank"
						rel="noreferrer"
						className="btn secondary"
					>
						Download Resume
					</a>
				</div>
			</div>

			<div className="hero-visual" aria-hidden="true">
				<div className="orb orb-one" />
				<div className="orb orb-two" />
				<div className="profile-card">
					<p className="profile-name">Anirudh Singh Bhati</p>
					<p className="profile-role">B.Tech CSE </p>
					<p className="profile-focus">DSA • React • Problem Solving</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;