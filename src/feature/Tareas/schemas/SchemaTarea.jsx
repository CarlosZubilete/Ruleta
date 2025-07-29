import * as Yup from 'yup';

const TareaSchema = Yup.object({
  tarea: Yup.string()
    .trim()
    .min(3, 'Al menos 3 caracteres')
    .max(100, 'Maximo de caracters')
    .required('Campo Requerido')
})

export default TareaSchema;

