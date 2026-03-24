import './Skills.css';

const SKILL_GROUPS = [
	{
		category: 'Programming Languages',
		items: ['Java', 'Python', 'C++'],
	},
	{
		category: 'Frontend',
		items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Web Design', 'UI/UX Design'],
	},
	{
		category: 'Databases',
		items: ['MySQL'],
	},
	{
		category: 'DevOps and Tools',
		items: ['Docker', 'Git', 'GitHub', 'Apache Tomcat'],
	},
	{
		category: 'Cloud',
		items: ['Google Cloud Platform'],
	},
	{
		category: 'OS and Virtualization',
		items: ['Linux (RHEL 9)', 'VMware', 'VirtualBox'],
	},
	{
		category: 'Core Skills',
		items: ['Data Structures', 'Algorithms', 'Agile Development', 'Code Review', 'CI/CD'],
	},
];

function Skills() {
	return (
		<section id="skills" className="skills-section" aria-label="Skills section">
			<div className="skills-header">
				<h2>Skills</h2>
				<p>A focused toolkit across development, systems, and software engineering practices.</p>
			</div>

			<div className="skills-grid">
				{SKILL_GROUPS.map((group, index) => (
					<article key={group.category} className="skill-card" style={{ animationDelay: `${index * 80}ms` }}>
						<h3>{group.category}</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}

export default Skills;