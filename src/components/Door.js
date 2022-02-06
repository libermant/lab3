/*rce*/
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
/*export class Door extends Component {
  constructor(props){
      super(props)
      this.state={statusDoor:{isOpen:true}}
      this.door=false
  }
  pppp=()=>{    
    this.setState({...this.state,statusDoor: {isOpen:!this.state.statusDoor.isOpen}})
  }

  render() {
    const coco=this.state.statusDoor.isOpen
    console.log(coco)
    return(
      <div className='door'>
        <button className='button' onClick={this.pppp}>
          Click to {coco?'close':'open'}
        </button>      
        <div>
        <FontAwesomeIcon icon={coco?['fas','door-open']:['fas','door-closed'] }/> 
        
        </div>
      </div>
    )
    
  }
}*/
import React from 'react';

const Door = () => {
  const[stateDoor,setStateDoor]=useState({isOpen:true})
  const[name,changeName]=useState('mintaka')
  const pppp=()=>{    
    setStateDoor({...stateDoor,isOpen:!stateDoor.isOpen})
    changeName(name=='mintaka'?'webschool':'mintaka')
    
    console.log(stateDoor)
  }
  const coco=stateDoor.isOpen
  return( 
    <div className='door'>
      <button className='button' onClick={pppp}>
        Click to {coco?'close':'open'}
      </button>      
      <div className='status'>
        <FontAwesomeIcon icon={coco?['fas','door-open']:['fas','door-closed'] }/>        
      </div>
      <div>
        {name}
      </div>
    </div>
  )
} 

export default Door;

