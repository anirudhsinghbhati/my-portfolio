# Anirudh Singh Bhati - Developer Portfolio

A modern, responsive portfolio website built with React to showcase profile, skills, projects, certifications, experience, and contact details.

## Highlights

- Sticky responsive navbar with active section tracking.
- Hero section with a lightweight 3D developer-themed animation (`react-three-fiber` + `three`).
- Dedicated sections for About, Skills, Projects, Certifications, Experience, and Contact.
- Resume download integration from `public/ANIRUDH_SINGH_BHATI-PIET23CS017.pdf`.
- Professional visual style with gradient background, glassmorphism cards, and motion effects.

## Tech Stack

- React 19
- Create React App (react-scripts 5)
- Three.js
- @react-three/fiber

## Project Structure

```text
my-portfolio/
	public/
		ANIRUDH_SINGH_BHATI-PIET23CS017.pdf
		passport.jpeg
		redhat.png
		rUUnM4pU.pdf
	src/
		App.js
		index.css
		components/
			Navbar.jsx
			Hero.jsx
			About.jsx
			Skills.jsx
			Projects.jsx
			Certification.jsx
			Experience.jsx
			Contact.jsx
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development

```bash
npm start
```

Open `http://localhost:3000`.

### 3) Build for production

```bash
npm run build
```

The optimized output is generated in the `build/` directory.

## Available Scripts

- `npm start` - start dev server
- `npm run build` - create production build
- `npm test` - run tests
- `npm run eject` - eject CRA configuration (irreversible)

## Personalization Notes

- Update links in `src/components/Projects.jsx` for actual GitHub/live project URLs.
- Update or extend certifications in `src/components/Certification.jsx`.
- Update contact links and email in `src/components/Contact.jsx`.
- Profile image is served from `public/passport.jpeg`.

## Deployment

This is a static React build and can be deployed to platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

Build first with `npm run build`, then deploy the `build/` folder.
