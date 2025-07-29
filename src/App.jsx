import './App.css'
import { Outlet } from 'react-router'
import Header from './feature/main/components/Header'
import Footer from './feature/main/components/Footer'
import TareaProvider from './feature/Tareas/context/TareaProvider'

function App() {
  return (
    <div className='App'>
      <Header />
      <TareaProvider>
        <Outlet />
      </TareaProvider>
      <Footer/>
    </div>
  )
}

export default App;
 

