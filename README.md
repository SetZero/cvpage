# CV Page

## Overview

This project is a modern, containerized personal CV (curriculum vitae) web page built with React, Vite, and TypeScript. It is optimized for fast loading, easy maintenance, and simple deployment using Docker and NGINX. The site is designed to showcase professional experience, education, skills, and contact information in a clean, responsive format.

---

## **Tech Stack**

- **React**: UI library for building the interactive user interface
- **Vite**: Lightning-fast build tool and development server
- **TypeScript**: Type-safe JavaScript for robust development
- **Docker**: Containerization for consistent builds and deployment
- **NGINX**: Serves the production-ready static site

---

## **Features**

- Responsive, accessible design
- Fast development and build workflow with Vite
- Type safety with TypeScript
- Production-ready Dockerfile using NGINX as the web server
- Easy customization and deployment

---

## **Getting Started**

### **Prerequisites**

- Node.js
- npm or yarn
- Docker (for containerized builds)

### **Local Development**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SetZero/cvpage.git
   cd cvpage
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the site locally.

### **Production Build**

```bash
npm run build
```

The static files will be output to the `dist/` directory.

---

## **Docker Deployment**

The project includes a multi-stage Dockerfile that builds the site and serves it with NGINX.

**Build and run with Docker:**

```bash
docker build -t cvpage .
docker run -p 80:80 cvpage
```

This will make the site available at [http://localhost](http://localhost).

---

## **Project Structure**

```txt
├── Dockerfile          # Docker configuration using NGINX
├── public/             # Static public assets
├── src/                # React + TypeScript source code
├── package.json        # Project scripts and dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── ...                 # Other config and documentation files
```

---

## **Customization**

- Update content in the `src/` directory to reflect your CV details.
- Adjust styles as needed in the corresponding CSS or style files.
- To change NGINX settings, modify the `nginx.conf` if present or update the Dockerfile as needed.

---

## **License**

This project is licensed under the GNU General Public License v3.0 (GPLv3).
See [LICENSE](./LICENSE) for details.

---

## **Contact**

For questions or suggestions, please open an issue or submit a pull request on [GitHub](https://github.com/SetZero/cvpage).