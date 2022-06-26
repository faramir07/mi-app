import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  
  return (
    <div className="App">
      <div className="contenedor-primcipal">
      <h1>Esto es lo que dicen nuestros alumnos:</h1>
      <Testimonio
      img='1'
      nombre='Maria Hernandez'
      pais='Venezuela'
      cargo='Ingeniero de Software'
      empresa='Amazon'
      testimonio='Et molestiae voluptatem rem velit accusantium qui enim obcaecati est similique placeat et optio odit eos nostrum autem. Sed reiciendis saepe 33 Quis error ut dolor rerum vel molestias error hic eveniet minima et quia atque.'
      />
      <Testimonio
      img='2'
      nombre='Carlos Pallera'
      pais='Colombia'
      cargo='Full Stack'
      empresa='It-Software'
      testimonio='Ut nostrum alias nam quisquam dolorum est veritatis Quis non harum molestiae. Eum nobis reiciendis At optio dolor ad esse animi non rerum necessitatibus est ipsam aliquid et minus reprehenderit non illum velit. Ex obcaecati quam sed debitis quod eos nostrum atque id rerum nisi. Et laborum aliquam est amet ipsa aut consequatur illum aut illum doloribus ea eaque eveniet.'
      />
      <Testimonio
      img='3'
      nombre='Santy Alvarado'
      pais='Chile'
      cargo='Backent Develop Wep'
      empresa='Chile-ing'
      testimonio='Lorem ipsum dolor sit amet. Et placeat doloribus dignissimos beatae et quia explicabo ea quia tempora et Quis odio et maxime quia? Et Quis dignissimos sit tempora odio vel sunt animi.'
      />
      </div>
    </div>
  );
}

export default App;
