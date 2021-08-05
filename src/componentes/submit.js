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
  const [cro, setCro] = useState(''); 

  const submitValue = () => {  
    setAcao(''); 
    setDesc('');
    setCname('');
     
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
      } 
    }).catch(err => err);
       
  }
  
  
  return(
    <div className="form-div" >

      <InputGroup>
        <InputGroupAddon addonType="prepend"><Button onClick={submitValue}>Consultar código</Button></InputGroupAddon>
        <Input type="text" placeholder="Informe código da ação" onChange={e => setfName(e.target.value)}/>
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            Exemplos de códigos de ações
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header >AAPL = Apple Inc.</DropdownItem>
            <DropdownItem header>BAC = Bank of Catar</DropdownItem> 
            <DropdownItem header>CRM = Salesforce</DropdownItem>   
            <DropdownItem header>NKE = Nike</DropdownItem>   
            <DropdownItem header>IBM = IBM</DropdownItem>   
            <DropdownItem header>KO = Coca-Cola</DropdownItem>   
            <DropdownItem header>DIS = DISNEY</DropdownItem>             
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />     

    
    {acao &&  
    <Card >  
      <CardTitle className="c-title">Nome: {cname}</CardTitle>
        <CardText className="c-price">Ultima cotação:  <h1 className="pricered">U${acao}</h1></CardText>         
        <CardText className="c-about">Mais sobre: {desc}</CardText>
    </Card>
    }    
    <Card >
        <CardText>{cro}</CardText> 
    </Card>
    


    </div>
  )
}




