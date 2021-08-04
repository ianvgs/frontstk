import React, {useState} from 'react'
import axios from 'axios'
import { Card,CardTitle, CardText } from 'reactstrap';

export default () => {
  
  const [fName, setfName] = useState('');
  const [acao, setAcao] = useState('');
  const [desc, setDesc] = useState(''); 
  const [cname, setCname] = useState('');
  const [ceo, setCeo] = useState('');  
  const [cro, setCro] = useState(''); 


  const submitValue = () => {  

    setAcao(''); 
    setDesc('');
    setCname('');
    setCeo(''); 
    setCro('');

    axios.post('https://bkstk.herokuapp.com/fac', 
    {acao: fName })
      .then((response) => {         
      if(response.data.message){
        setCro(response.data.message); 
      }  
      
      if(response.data.priceC){
        setAcao(response.data.priceC); 
        setDesc(response.data.infoC.description);
        setCname(response.data.infoC.companyName);
        setCeo(response.data.infoC.ceo);         
      } 
    }).catch(err => err);
       
  }
 
  
  return(
    <>
    <hr/>
    <input type="text" placeholder="Name" onChange={e => setfName(e.target.value)} />    
    <button onClick={submitValue}>Submit</button>
    <br/>
    
    <Card >
        
             
        <CardTitle tag="h5">{cname}</CardTitle>
        <CardText>{ceo}</CardText>
        <CardText>{desc}</CardText>  
        <CardText>{acao}</CardText>
        <CardText>{cro}</CardText>         

      
    </Card>    
   

    </>
  )
}




