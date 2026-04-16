# FDM Employee Portal

A modern employee portal prototype built to support core internal processes including leave management, ticketing, communication, and programme onboarding.

---

## Overview

This application simulates an internal system used by consultants and staff within an organisation. It focuses on usability, clean UI design, and demonstrating key use cases required for a software engineering project.

The system is built as a frontend prototype with mock data, prioritising user experience and interaction over full backend implementation.

---

## Features

- User login (frontend validation)
- Leave request submission and tracking
- HR leave approval and rejection
- IT ticket creation and management
- Messaging between users
- Policy viewing and management
- Programme onboarding pages
- Weekly schedule view for consultants
- Announcements system

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router

### Backend (Planned)
- Firebase (Authentication + Firestore)

---

## Project Structure

- `/pages` – Main application pages (Dashboard, Leave, Tickets, etc.)
- `/components` – Reusable UI components
- `/layouts` – App layout and sidebar structure
- `/public` – Static assets (PDF policies, images)

---

## Key Use Cases

- Login to the system
- Submit a leave request
- Approve or reject leave requests (HR role)
- Create and manage IT tickets
- Send and receive messages
- View and manage policies
- Access programme content
- View weekly schedule

---

## Acceptance Testing

Acceptance tests were conducted on all key use cases, including both successful and invalid inputs.

The system correctly handles:
- Form validation (empty inputs, incorrect data)
- User flows (navigation between pages)
- Role-based interactions (e.g. HR approvals)

Some features are implemented using mock data due to the absence of a backend.

---

## Limitations

- No backend integration (data is not persisted)
- Login does not authenticate users against a database
- Messaging is not stored after refresh
- Policy uploads are simulated within the UI

---

## Future Improvements

- Integrate Firebase for authentication and data storage
- Implement real-time messaging
- Add role-based access control
- Improve validation and error handling
- Enhance UI responsiveness and accessibility

---

## Authors

Developed as part of a group Software Engineering project.

---

## Notes

This project is a prototype designed to demonstrate system functionality, UI design, and user interaction rather than a fully deployed production system.