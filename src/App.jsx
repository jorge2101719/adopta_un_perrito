// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <Header title='Adopta un perrito' />

        <div className='tarjetas'>
          <Card
            name='General'
            image='https://placedog.net/100'
            text='Peludo'
            bg='primary'
            mainText={'Buena compañía en hogar, el juego y los paseos'}
            // textButton='Adoptar ahora'
            // bg={'primary'}
          />

          <Card
            name='Principio'
            image='https://placedog.net/110'
            text='Escosés'
            bg='secondary'
            mainText={'Buena compañía para pasear por el parque'}
            // textButton='Adoptar después'
          />

          <Card
            name='Capitán'
            image='https://placedog.net/120'
            text='Pelos cortos'
            bg='success'
            mainText={'Pequeño y juguetón, ideal para hogares'}
            // textButton='Adoptar mañana'
          />

          <Card
            name='Alternativa'
            image='https://placedog.net/130'
            text='Compadres'
            bg='warning'
            mainText={'Dos amigos para jugar y pasear'}
            // textButton='Ahora no'
          />
        </div>
    
        <Footer />
      </body>
    </>
  )
};

export default App;
