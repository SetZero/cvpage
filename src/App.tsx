// App.js
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'
import './colors.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/404';


export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        {/* Add more routes for other pages if needed */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}