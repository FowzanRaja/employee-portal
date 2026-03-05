## FDM Employee Portal — Summary

The FDM Employee Portal is a centralised web platform that simplifies HR processes and internal communication for a distributed workforce. It provides role-based workflows and self-service tools (leave requests and approvals, announcements, messaging, and IT tickets) to reduce reliance on fragmented email and spreadsheet workflows and improve visibility and efficiency for consultants, managers, HR and IT staff.

## Running the project

To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173 in your browser
```

## Project structure

- frontend/

- frontend/
	- package.json
	- index.html
	- vite.config.js
	- public/ (static assets)
	- src/
		- app/         (routing and app entry)
		- pages/       (route-level pages)
		- components/  (reusable UI components and layout)
			- layout/
			- common/
		- api/         (backend API clients)
		- auth/        (auth context and hooks)
		- data/        (constants and seeded data)
		- assets/      (images, svgs)
		- App.jsx
		- App.css
		- index.css
		- main.jsx

- backend/
	- package.json
	- src/
