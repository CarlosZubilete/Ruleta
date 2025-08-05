import './App.css'
import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import Navbar from './feature/main/components/Navbar'
import Footer from './feature/main/components/Footer'
import TareaProvider from './feature/Tareas/context/TareaProvider'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add('darkmode');
    } else {
      body.classList.remove('darkmode');
    }
  }, [isDarkMode]);

  return (
    <div className='App'>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <TareaProvider>
        <main>
          <Outlet />
        </main>
      </TareaProvider>
      <Footer/>
    </div>
  )
}

export default App;
 

