// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// Este trabajo se ha creado con Vite (punto 1 del desafío)
// Aunque exprimenté con una clase dináminca,
// estimé que no era necesario incluirla en este trabajo
import './App.css';
// se importa react-bootstrap
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
            // stock = '0'
          />

          <Card
            name='Principio'
            image='https://placedog.net/214'
            mainText={'Buena compañía para pasear por el parque los domingos'}
            text='Lealtad'
            bg='secondary'
            // stock = '3'
          />

          <Card
            name='Capitán'
            image='https://placedog.net/223'
            mainText={'Pequeño y juguetón, ideal para hogares: un amigo fiel'}
            text='Amabilidad'
            bg='success'
            // stock = '2'
          />

          <Card
            name='Alternativa'
            image='https://placedog.net/240'
            mainText={'Tierno y juguetón, el mejor amigo para una buena jornada de paseo'}
            text='Alegría'
            bg='warning'
            // stock = '1'
          />
        </div>
    
        {/* puntos 2 y 6 del desafío */}
        <Footer />
      </div>
    </>
  )
};

export default App;
