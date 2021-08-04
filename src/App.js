import Footer from './componentes/footer'
import Fomr from './componentes/submit'
import img from './imagens/Frame 1.png'
import './App.css'




function App() {
  return ( 
    
      <div className="div-box">
      <div ><Footer /></div> 
      <div ><img src={img}></img></div>
      <div ><Fomr/></div>      
      
      </div>   
  );
}

export default App;

