import './Projects.css';

const PROJECTS = [
	{
		title: 'Portfolio Website',
		description:
			'A modern personal portfolio with smooth navigation, responsive layout, and animated UI sections for recruiter-friendly presentation.',
		techStack: ['React', 'CSS3', 'Responsive Design'],
		githubLink: 'https://github.com/your-username/portfolio',
		liveDemoLink: 'https://your-portfolio-demo.vercel.app',
	},
];

function Projects() {
	return (
		<section id="projects" className="projects-section" aria-label="Projects section">
			<div className="projects-header">
				<h2>My Projects</h2>
				<p>Some of my recent work in web development, problem solving, and product design.</p>
			</div>

			<div className="projects-grid">
				{PROJECTS.map((project, index) => (
					<article key={project.title} className="project-card" style={{ animationDelay: `${index * 90}ms` }}>
						<h3>{project.title}</h3>
						<p className="project-description">{project.description}</p>

						<ul className="tech-list" aria-label={`${project.title} tech stack`}>
							{project.techStack.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>

						<div className="project-actions">
							<a href={project.githubLink} target="_blank" rel="noreferrer">
								GitHub
							</a>
							{project.liveDemoLink ? (
								<a href={project.liveDemoLink} target="_blank" rel="noreferrer">
									Live Demo
								</a>
							) : (
								<span className="disabled-link" aria-disabled="true">
									Live Demo Soon
								</span>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Projects;