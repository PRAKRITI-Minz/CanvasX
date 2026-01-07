# CanvasX – Visual Portfolio Builder

CanvasX is a visual, drag-and-drop portfolio builder that allows users to design layouts freely on a canvas without writing code. Users can create, edit, resize, and manage content blocks visually and store their projects securely using a backend API and database.

---

## Project Overview

Traditional portfolio creation requires technical knowledge of frontend technologies such as HTML, CSS, and JavaScript. This creates a barrier for non-technical users.

CanvasX addresses this problem by providing:
- A visual canvas editor similar to modern no-code tools
- Direct manipulation of layout elements (drag, resize, edit)
- Persistent storage of layouts using a backend API

The goal of the project is to demonstrate:
- Advanced React state management
- Mouse-based interaction handling (dragging and resizing)
- Frontend–backend integration

---

## Problem Statement

Users who want to create personal portfolios often face one or more of the following challenges:

- Lack of coding knowledge
- Difficulty visualizing layout changes in code
- Time-consuming trial-and-error with CSS positioning

CanvasX solves these issues by:
- Allowing freeform layout creation on a canvas
- Persisting user designs automatically
- Offering an intuitive editing workflow similar to professional design tools

---
## Features

- Visual drag-and-drop canvas editor
- Create, edit, and delete content blocks
- Resize blocks vertically
- Real-time layout editing
- Project persistence using database
- REST API powered backend
- Clean and minimal UI inspired by modern website builders
- Can create multiple projects.
- Content is saved after reload/refresh.
---

## Tech Stack

### Frontend
- React (with Vite)
- React Router
- JavaScript 
- CSS

### Backend
- Node.js
- Express.js

## Databse
- MongoDB
- Mongoose

## Development and testing tools
- Postman
- Git & Github
---

## Project Folder structure

canvasx-react/
├── canvasx/
│   ├── backend/
│   │   ├── data/
│   │   │   └── projects.json          
│   │   ├── middleware/
│   │   │   └── auth.js                 
│   │   ├── models/
│   │   │   ├── Project.js              
│   │   │   └── User.js                 
│   │   ├── routes/
│   │   │   ├── auth.js                
│   │   │   └── projects.js            
│   │   ├── .env                        
│   │   ├── server.js                  
│   │   ├── package.json              
│   │   └── package-lock.json
│   │
│   ├── public/
│   │   ├── canvasx.png                            
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── api.js                  
│   │   │   ├── auth.js             
│   │   │   └── projects.js         
│   │   │
│   │   ├── assets/
│   │   │   ├── canvasx-logo.png        
│   │   │   └── portfolio-preview.png   
│   │   │
│   │   ├── components/
│   │   │   ├── Block.jsx               
│   │   │   ├── Canvas.jsx              
│   │   │   ├── EditorToolbar.jsx       
│   │   │   ├── Navbar.jsx             
│   │   │   ├── PrivateRoute.jsx        
│   │   │   └── Sidebar.jsx            
│   │   │
│   │   ├── hooks/
│   │   │   ├── useDrag.jsx             
│   │   │   └── useRequireAuth.js    
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx           
│   │   │   ├── Editor.jsx              
│   │   │   ├── Home.jsx               
│   │   │   └── Projects.jsx           
│   │   │
│   │   ├── utils/
│   │   │   └── exportPortfolio.jsx    
│   │   │
│   │   ├── App.jsx                     
│   │   ├── App.css                     
│   │   ├── index.css                  
│   │   └── main.jsx                 
│   │
│   ├── index.html                     
│   ├── eslint.config.js               
│   ├── .gitignore
│   ├── package.json                   
│   ├── package-lock.json
|───└── README.md

## Installation & Setup
### Prerequisites
- Node.js
- npm
- MongoDB Atlas account

---

### Backend Setup
cd backend
npm install
node server.js / npm start

### Frontend Setup
cd canvasx-react
npm install
npm run dev

### Authentication APIs
| Method | Endpoint         | Description                              |
|-------:|------------------|------------------------------------------|
| POST   | /auth/signup     | Register a new user                      |
| POST   | /auth/login      | Authenticate user and return JWT token   |

### Project APIs
| Method | Endpoint          | Description                          |
|-------:|-------------------|--------------------------------------|
| GET    | /projects         | Fetch all user projects              |
| POST   | /projects         | Create a new project                 |
| GET    | /projects/:id     | Fetch project by ID                  |

### API Testing
Postman was used to test and validate all backend API endpoints during development.

---

## Third-Party Libraries, Credits & Attributions

### Frontend
- React – Component-based JavaScript UI library  
  https://react.dev/
- Vite – Frontend build tool and development server  
  https://vitejs.dev/
- React Router DOM – Client-side routing  
  https://reactrouter.com/
- Fetch API – HTTP client for API communication  

### Backend
- Node.js – JavaScript runtime environment  
  https://nodejs.org/
- Express.js – Web application framework for Node.js  
  https://expressjs.com/
- JSON Web Token (jsonwebtoken) – User authentication  
  https://github.com/auth0/node-jsonwebtoken
- bcrypt / bcryptjs – Password hashing  
  https://github.com/dcodeIO/bcrypt.js
- dotenv – Environment variable management  
  https://github.com/motdotla/dotenv
- MongoDB - https://cloud.mongodb.com
- Mongoose – https://mongoosejs.com

### Development & Tools
- Postman – API testing and debugging  
  https://www.postman.com/
- Git & GitHub – Version control and repository hosting  
  https://git-scm.com/  
  https://github.com/

### Future Add ons
- Login Page
- Image upload
- Resize for both horizontal and vertical direction
- Renaming and deleting multiple projects

### Assets & Media  
- canvasx-logo.png – Custom assets created for this project 
- portfolio-preview.png - Pinterest  
- All UI components and canvas interactions are custom-built without using UI templates.

---

## License & Usage

- All third-party libraries are used under their respective open-source licenses.
- This project is developed for educational and academic purposes.
- No paid or proprietary assets are used.

---


### Usage Guide
- Open the application in the browser
- Select or load a project
- Add blocks from the sidebar
- Drag blocks freely on the canvas
- Resize blocks using mouse interaction
- Click inside a block to edit its content
- All changes are saved automatically

### AI Tools and usage
- **ChatGPT (OpenAI)**
 - Understanding full-stack development concepts
 - Receive step-by-step guidance during implementation
 - Clarifying React, API and backend logic
 - Debugging errors and improving code structure
 - Writing and refining project documention
 - used for improving CSS styling

 ### Other sources
 - **YT**
 - Learned concepts and topics during development.
 - Understanding how to break large application into frontend, backend and databse layers.
 - Learning about different API Methods.
 - Understanding MongoDB connection to node.js
 - **MDN**
 - For study resources.
