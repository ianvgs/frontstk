import Footer from './componentes/footer'
import Fomr from './componentes/submit'
import img from './imagens/Frame 1.png'



function App() {
  return (
    <div style={{marginLeft:300, alignItems:"center",justifyContent:"center"}} >



      <img src={img}/>
      <br/>
      <Fomr style={{width:600}} />

      <Footer />
      

    </div>
  );
}

export default App;
