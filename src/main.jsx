import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// Componets
import Home from './feature/main/components/Home.jsx';
// import AddTarea from './feature/Tareas/components/AddTarea.jsx';
import PageTarea from './feature/Tareas/page/PageTarea.jsx';


 const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
      children:[
        {
          index: true,
          Component: Home,
        },
        {
          path:'/ruleta',
          element: <h1>RULETA</h1>
          //Component: 
        },
        {
          path:'/lista',
          Component: PageTarea
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
