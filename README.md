# Fasilkom Unsri Redesign

A comprehensive redesign project for the official website of the Faculty of Computer Science, Universitas Sriwijaya. This collaborative project aims to modernize the university's web presence through complete UI/UX redesign, frontend redevelopment, and backend reconstruction.

---

## Project Overview

This project represents a complete overhaul of the Faculty of Computer Science website, focusing on:
- **Modern UI/UX Design**: Contemporary, user-friendly interface design
- **Responsive Frontend**: Built with React and modern web technologies
- **Robust Backend**: RESTful API built with Go and Fiber framework
- **Enhanced User Experience**: Improved navigation and accessibility for students, lecturers, and visitors

---

## Project Team

- **UI/UX Designer**: [M. Suheil Ichma Putra](https://github.com/MuhammadSuheil)
- **Frontend Developer**: [M. Rabyndra Janitra Binello](https://github.com/ElloRabyndra)
- **Backend Developer**: [Dian Kharisma Ramadhan](https://github.com/RenaiRS)

---
## Related Repositories

- **Backend Repository**: [Fasilkom-Backend](https://github.com/RenaiRS/Fasilkom-Backend)
- **UI/UX Design**: [Figma Projct](https://www.figma.com/design/qTUn3R1plLQAQ8hyUpVufC/Redisign-Challenge-Team-4?node-id=0-1&t=f5HVqCR3t8YK2hJu-1)

---

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Shadcn/UI, Lucide React, React Router, React Toastify

**Backend:** Go, Fiber, GORM, MySQL, JWT, Bcrypt

---

## Features

- **Responsive Design**
- **News & Information Management**
- **Student Services**
- **Organization Directory**
- **Academic Services**
- **Profile Pages**
- **Toast Notifications**

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Go (v1.24.2 or higher)
- MySQL (or compatible database)

### Backend Setup

1. **Database Setup**
   - Create a new MySQL database named `fasilkom_be`
   - Import the SQL dump from `database/fasilkom_be.sql`

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Configure your database credentials:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASS=your_db_password
   DB_NAME=fasilkom_be
   SERVER_PORT=8080
   ```

3. **Install Dependencies & Run**
   ```bash
   go mod tidy
   go run main.go
   ```

> **Note**: For complete backend documentation and setup instructions, visit the [Backend Repository](https://github.com/RenaiRS/Fasilkom-Backend)

### Frontend Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

The frontend will be available at `http://localhost:5173`

### Live Demo

You can view the live frontend demo at: [https://fasilkom-universitas-sriwijaya.vercel.app/](https://fasilkom-universitas-sriwijaya.vercel.app/)

*Note: The live demo runs in offline mode using local data since no backend is deployed.

---

## Data Management System

This project features a smart dual-mode system: **Online Mode** fetches real-time data from the API when the backend is available, while **Offline Mode** automatically switches to local data as fallback when the server is unavailable, ensuring uninterrupted user experience.

---

## API Endpoints

### Public Endpoints
- `GET /api/berita` - Get all news
- `GET /api/scholarship` - Get scholarships
- `GET /api/vacancies` - Get job vacancies
- `GET /api/kemahasiswaan-kerjasama` - Get student programs

### Admin Endpoints (Authentication Required)
- `POST /api/admin/login` - Admin authentication
- `POST /api/berita` - Create news
- `PATCH /api/berita/:id` - Update news
- `DELETE /api/berita/:id` - Delete news

> For complete API documentation, refer to the [Backend Repository](https://github.com/RenaiRS/Fasilkom-Backend)

---

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── home/           # Home page components
│   │   ├── profil/         # Profile page components
│   │   └── ui/             # Base UI components
│   ├── pages/              # Page components
│   ├── routing/            # Route configuration
│   ├── service/            # API service functions
│   ├── database/           # Local data fallback
│   └── style/              # Global styles
├── public/                 # Static assets
└── README.md
```

---

## License

This project is developed for the Faculty of Computer Science, Universitas Sriwijaya as part of a collaborative redesign.

---