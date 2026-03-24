import './Experience.css';

const EXPERIENCE_ITEMS = [
	{
		type: 'Achievement',
		title: 'Competitive Programming and DSA Progress',
		organization: 'Self-driven practice',
		duration: 'Ongoing',
		details: [
			'Consistent focus on DSA and problem-solving to improve coding interview readiness and algorithmic thinking.',
			'Applied learned patterns directly in personal projects to improve code quality and efficiency.',
		],
	},
	{
		type: 'Bootcamp',
		title: 'Cybersecurity in Wireless Communications Bootcamp',
		organization: 'PIET Jaipur in collaboration with IIT Guwahati',
		duration: 'Oct 2025',
		details: [
			'Gained hands-on experience in wireless security concepts including encryption, intrusion detection, and MITM attacks.',
			'Worked with industry tools like Wireshark, Aircrack-ng, and Kali Linux.',
			'Explored IoT security, real-world attack scenarios, and security best practices through practical sessions.',
			'Successfully completed a 5-day intensive fully funded training program.',
		],
	},
	{
		type: 'Internship',
		title: 'DevOps/Linux Training Intern',
		organization: 'Red Hat',
		duration: 'Jul 2025 - Aug 2025',
		details: [
			'Completed RHEL administration training aligned with RHCSA, covering Linux configuration, user management, and networking workflows.',
			'Built shell scripting practice for automation and applied DevOps fundamentals for enterprise infrastructure tasks.',
		],
	},
	{
		type: 'Internship',
		title: 'UI/UX Intern',
		organization: 'ImagineXP (CollegeDekho)',
		duration: 'Jul 2024 - Aug 2024',
		details: [
			'Conducted user research with 20+ participants to identify usability bottlenecks and improve navigation clarity.',
			'Designed 10+ wireframes and interactive prototypes in Figma, then collaborated with a 5-member team for UI consistency.',
		],
	},
];

function Experience() {
	return (
		<section id="experience" className="experience-section" aria-label="Experience and achievements section">
			<div className="experience-header">
				<h2>Experience and Achievements</h2>
				<p>My journey through internships, hands-on training, and technical growth milestones.</p>
			</div>

			<div className="timeline" role="list">
				{EXPERIENCE_ITEMS.map((item, index) => (
					<article key={`${item.title}-${item.organization}`} className="timeline-item" style={{ animationDelay: `${index * 100}ms` }} role="listitem">
						<div className="timeline-dot" aria-hidden="true" />
						<div className="timeline-card">
							<p className="timeline-type">{item.type}</p>
							<h3>{item.title}</h3>
							<p className="timeline-meta">
								{item.organization} | {item.duration}
							</p>
							<ul>
								{item.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default Experience;