import imagen1 from './imagenes/imagen1.jpeg';
import imagen0 from './imagenes/imagen0.jpg';
import './App.css';
import { useRef } from 'react';

function App() {
  const cambio = 195;
  const ref = useRef();
  const sumar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if(e.target.innerHTML >= 10){
      e.target.innerHTML = 1;

    }

    if(e.target.innerHTML >= 8 ){
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
    }

    console.log(e.target.innerHTML);
  };

  const cambiarMoneda = (e) => {
    ref.current.innerHTML = Number(ref.current.innerHTML) * cambio;
    console.log(ref.current.innerHTML);
  }

  const manejarEntradaTexto = (e) => {
    ref.current.innerHTML = e.target.value;
    console.log(ref.current.innerHTML);
  }

  const cambiarImagen = (e) => {
    if(e.target.src.includes(imagen1)){
      e.target.src = imagen0;
    } else {
      e.target.src = imagen1;
    }
    
  }

  return (
    <>
     <div className="caja">
      <div ref={ref} onClick={sumar} className={"numero"}>1</div>
      <button 
       className='estilos-boton'
       onClick={cambiarMoneda}>
        Cambiar Moneda
      </button>
      <img 
        src={imagen1}
        alt="imagen comida"
        onClick={cambiarImagen}
      />
      <input 
       placeholder='Entre su numero aqui...'
       onChange={manejarEntradaTexto}/>
     </div>
    </>
  );
}

export default App;
