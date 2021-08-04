import Footer from './componentes/footer'
import Fomr from './componentes/submit'
import img from './imagens/Frame 1.png'
import './App.css'

//style={{marginLeft:300, alignItems:"center",justifyContent:"center"}}

function App() {
  return (
    <>


    <div className="div-app" >

      <img src={img}/>
      <br/>
      <Fomr style={{width:600}} />

        

    </div>
    <Footer className="footer-app"/>   
    </>
  );
}

export default App;
