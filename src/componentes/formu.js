import React, { Component } from 'react'
import axios from 'axios'


class Usuario extends Component {    
    
    constructor() {
        super()
        this.state = {            
            acao: '',
            desc:'',
            data:''
                    
        } 
    }    

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }   
    handleSubmit = async () => {
        axios.post('https://bkstk.herokuapp.com/fac', 
         {acao: this.state.acao})
      .then((response) => {
        console.log(response.data)
        this.setState({
            data:response.data,
            desc:response.data.infoC
        })
        }); 

    }

    
    render() {
        return (
            
            <>
            


                <div style={{ textAlign: 'center', justifyContent: 'left', width: "100%", marginTop: 100, height: 350 }}>

                
                    <div>
                        <label>acao</label><br />
                        <input value={this.state.acao} onChange={this.handleEmailChange}></input>
                    </div>
                    
                    <button onClick={this.handleSubmit}>Login</button>
                                      

                                            
                </div>
            </>
        )
    }
}

export default Usuario;