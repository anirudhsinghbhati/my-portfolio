import { useEffect, useMemo, useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Skills', id: 'skills' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Certifications', id: 'certifications' },
	{ label: 'Experience', id: 'experience' },
	{ label: 'Contact', id: 'contact' },
];

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);

	const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			const scrollMiddle = window.scrollY + window.innerHeight * 0.25;
			let currentSection = 'home';

			sectionIds.forEach((id) => {
				const section = document.getElementById(id);
				if (!section) {
					return;
				}

				const top = section.offsetTop;
				const bottom = top + section.offsetHeight;
				if (scrollMiddle >= top && scrollMiddle < bottom) {
					currentSection = id;
				}
			});

			setActiveSection(currentSection);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sectionIds]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 900) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleNavClick = (event, id) => {
		event.preventDefault();
		const section = document.getElementById(id);

		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
			setActiveSection(id);
		}

		setIsMenuOpen(false);
	};

	return (
		<header className={`navbar-wrap ${isScrolled ? 'scrolled' : ''}`}>
			<nav className="navbar" aria-label="Primary navigation">
				<a
					className="brand"
					href="#home"
					onClick={(event) => handleNavClick(event, 'home')}
				>
					Anirudh Singh Bhati
				</a>

				<button
					className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
					aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={isMenuOpen}
					aria-controls="primary-menu"
					type="button"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					<span />
					<span />
					<span />
				</button>

				<ul id="primary-menu" className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
					{NAV_ITEMS.map((item) => (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className={activeSection === item.id ? 'active' : ''}
								onClick={(event) => handleNavClick(event, item.id)}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
