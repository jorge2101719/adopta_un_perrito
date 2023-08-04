// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Este trabajo se ha creado con Vite (punto 1 del desafío)
// como no hay elementos a la venta,
// estimé innecesario usar el operador ternario para agregar una clase dinámicamente
import './App.css';
// se agregaron dependencias y se importan elementos bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importación de elementos Header, Card y Footer (punto 6 del desafío)
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        {/* punto 2 y 6 del desafío */}
        {/* Se cambia el título por defecto */}
        <Header title='Adopta un perrito' />

        {/* puntos 3 y 6 del desafío: se envían props desde aquí */}
        {/* se reutiliza el elemento Card */}
        <div className='tarjetas'>
          <Card
            name='General'
            image='https://placedog.net/200'
            mainText={'Buena compañía en hogar, el juego y los paseos'}
            text='Amistad'
            bg='primary'
          />

          <Card
            name='Principio'
            image='https://placedog.net/214'
            mainText={'Buena compañía para pasear por el parque los domingos'}
            text='Lealtad'
            bg='secondary'
          />

          <Card
            name='Capitán'
            image='https://placedog.net/223'
            mainText={'Pequeño y juguetón, ideal para hogares: todo un artista'}
            text='Amabilidad'
            bg='success'
          />

          <Card
            name='Alternativa'
            image='https://placedog.net/240'
            mainText={'Tierno y juguetón, el mejor amigo para una buena jornada de paseo'}
            text='Alegría'
            bg='warning'
          />
        </div>
    
        {/* puntos 2 y 6 del desafío */}
        <Footer />
      </div>
    </>
  )
};

export default App;
