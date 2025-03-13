import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rigoberto</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
/*Esto es un componente de react. Un componente es una función que devuelve código similar al html. Todo el código html debe estar agrupado dentro de una etiqueta, puede ser algo semantico o estar vacío como en este caso.

Otras diferencias con el html básico.

aquí class es className
El html puede llevar variables de javascript con llaves en lugar de la parafernalia que haciamos antes.

*/
export default App;
