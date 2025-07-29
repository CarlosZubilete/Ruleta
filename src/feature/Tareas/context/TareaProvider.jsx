import TareaContext from './TareaContext';
import useTareaLogic from '../hooks/useTareaLogic'

function TareaProvider ({ children }) {
  const tarea = useTareaLogic();

  return (
    <TareaContext.Provider value={tarea}>
      {children}
    </TareaContext.Provider>
  )
}
export default TareaProvider;