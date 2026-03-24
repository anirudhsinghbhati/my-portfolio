import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './Hero.css';

function TechCoreModel() {
	const coreRef = useRef(null);
	const shellRef = useRef(null);
	const ringRef = useRef(null);
	const groupRef = useRef(null);

	useFrame((state, delta) => {
		if (groupRef.current) {
			groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.18;
		}

		if (coreRef.current) {
			coreRef.current.rotation.x += delta * 0.45;
			coreRef.current.rotation.y += delta * 0.6;
		}

		if (shellRef.current) {
			shellRef.current.rotation.y -= delta * 0.25;
			shellRef.current.rotation.z += delta * 0.15;
		}

		if (ringRef.current) {
			ringRef.current.rotation.x += delta * 0.2;
			ringRef.current.rotation.y += delta * 0.35;
		}
	});

	return (
		<group ref={groupRef}>
			<mesh ref={coreRef}>
				<icosahedronGeometry args={[0.8, 1]} />
				<meshPhysicalMaterial
					color="#66e4ff"
					emissive="#0a9fb8"
					emissiveIntensity={0.45}
					roughness={0.28}
					metalness={0.65}
					clearcoat={0.8}
					clearcoatRoughness={0.2}
				/>
			</mesh>

			<mesh ref={shellRef} scale={1.4}>
				<icosahedronGeometry args={[0.8, 1]} />
				<meshBasicMaterial color="#7fd6ff" wireframe transparent opacity={0.34} />
			</mesh>

			<mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
				<torusGeometry args={[1.15, 0.05, 20, 80]} />
				<meshStandardMaterial color="#7af5c8" emissive="#128f73" emissiveIntensity={0.25} metalness={0.6} roughness={0.35} />
			</mesh>
		</group>
	);
}

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
				<div className="hero-canvas-wrap">
					<Canvas className="hero-canvas" camera={{ position: [0, 0, 3.6], fov: 48 }} dpr={[1, 1.5]}>
						<ambientLight intensity={0.58} />
						<directionalLight position={[2.4, 2.2, 1.6]} intensity={1.05} color="#9ff2ff" />
						<pointLight position={[-2, -1, 2]} intensity={0.72} color="#53d7c7" />
						<TechCoreModel />
					</Canvas>
				</div>
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