import React from 'react';
import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es el titulo principal de la pagina:</h1>
      <Testimonio
        nombre='Emma Bostian'
        pais='Sweden'
        imagen='Emma'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify' />

        <Testimonio
        nombre='Emma Bostian'
        pais='Singapur'
        imagen='Shawn'
        cargo='Software Engineer'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida' />

        <Testimonio
        nombre='Jhon Chima'
        pais='Nigeria'
        imagen='Jhon'
        cargo='Software Engineer'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble' />
      </div>
    </div>
  );
}

export default App;
