import React, { Component } from 'react'
import * as messageService from '../../services/message'
import styles from './Messaged.module.css'



class Messaged extends Component {
  state = { 
    messaged: []
  }
async componentDidMount(){
  // List of messages of everyone I Messaged
  const messaged = await messageService.getMessaged()
  console.log(messaged)
  this.setState({messaged: messaged})

}
  render() { 
    return (
      <>
      {this.state.messaged?.map(messaged=>
       <h1>{messaged.otherPerson.firstName}</h1> 
        )}
      </>
    );
  }
}

export default Messaged;