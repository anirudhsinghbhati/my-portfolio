import './Certification.css';

const CERTIFICATIONS = [
	{
		title: 'Red Hat System Administration (RHCSA Aligned Training)',
		issuer: 'Red Hat',
		date: 'Aug 2025',
		link: '/redhat.png',
	},
	{
		title: 'Google Cloud Fundamentals',
		issuer: 'Google Cloud Skills Boost',
		date: '2025',
		link: 'rUUnM4pU.pdf ',
	},
];

function Certification() {
	return (
		<section id="certifications" className="cert-section" aria-label="Certifications section">
			<div className="cert-header">
				<h2>Certifications</h2>
				<p>Professional training and certifications that strengthen my software and system fundamentals.</p>
			</div>

			<div className="cert-grid">
				{CERTIFICATIONS.map((cert, index) => (
					<article key={`${cert.title}-${cert.issuer}`} className="cert-card" style={{ animationDelay: `${index * 90}ms` }}>
						<p className="cert-issuer">{cert.issuer}</p>
						<h3>{cert.title}</h3>
						<p className="cert-date">Issued: {cert.date}</p>

						<a href={cert.link} target="_blank" rel="noreferrer" aria-label={`View certificate from ${cert.issuer}`}>
							View Certificate
						</a>
					</article>
				))}
			</div>
		</section>
	);
}

export default Certification;
