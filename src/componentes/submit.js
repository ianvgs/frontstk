import React, {useState} from 'react'
import axios from 'axios'
import { Button, Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem, Card,CardTitle, CardText } from 'reactstrap';
import '../App.css'



export default () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);  
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  
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
    <div className="form-div">

      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button onClick={submitValue}>Consultar código</Button></InputGroupAddon>
        <Input type="text" placeholder="Informe código da ação" onChange={e => setfName(e.target.value)}/>
      </InputGroup>
      <br />

      <InputGroup>
        
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            Exemplos de códigos de ações
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header >Aapl = Apple Inc.</DropdownItem>
            <DropdownItem header>Bac = Bank of Catar</DropdownItem>           
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />    

    
    {acao &&  
    <Card >  
      <CardTitle tag="h5">{cname}</CardTitle>
        <CardText>Ultima cotação:{acao}</CardText> 
        <CardText>Ceo:{ceo}</CardText>
        <CardText>Mais sobre:{desc}</CardText>
    </Card>
    }    
    <Card >
        <CardText>{cro}</CardText> 
    </Card>
    


    </div>
  )
}




