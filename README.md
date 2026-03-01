# Mitrox Gym Oy – Website

A demo gym website for Mitrox Gym Oy. Includes the following pages:

- **Home** – hero, stats, features, testimonials
- **Services** – overview of all gym services
- **Membership** – pricing plans with monthly/annual toggle
- **Schedule** – class timetable
- **PT Services** – personal training offerings
- **About** – gym story and team
- **Contact** – enquiry form + map

The contact form posts to `/api/contact` which logs the submission to the console — ready to be wired up to a real email service.

## Running the project

Install dependencies (first time only):
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Other commands

| Command | What it does |
|---|---|
| `npm run build` | Builds the site for production |
| `npm run start` | Runs the production build locally |
