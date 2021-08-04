import React, {useState} from 'react'
import axios from 'axios'
import { Card,CardTitle, CardText } from 'reactstrap';


export default () => {

  const [fName, setfName] = useState('');
  const [acao, setAcao] = useState(''); 
  const [desc, setDesc] = useState('');  
  
  const submitValue = () => {    
    axios.post('https://bkstk.herokuapp.com/fac', 
    {acao: fName })
      .then((response) => {
        console.log(response.data)
        setAcao(response.data);
        setDesc(response.data.infoC)
    }).catch(err => {console.log(err)});
  ;     
  }
 

  return(
    <>
    <hr/>
    <input type="text" placeholder="Name" onChange={e => setfName(e.target.value)} />    
    <button onClick={submitValue}>Submit</button>
    <br/>

    {(acao && 
    <Card style={{width:600}} body outline color="secondary">
        
        <CardText>{acao.message}</CardText>
        <CardText>{desc.symbol}</CardText>
        <CardTitle tag="h5">{acao.companyName}</CardTitle>
        <CardText>{acao.priceC}</CardText>
        <CardText>{desc.companyName}</CardText>
        <CardText>{desc.description}</CardText>
        <CardText>{desc.CEO}</CardText>
    </Card>    
    )}   

    </>
  )
}




