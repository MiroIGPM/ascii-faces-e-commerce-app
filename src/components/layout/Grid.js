import React from 'react'
import Face from './Face'
import Ad from './Ad'

const Grid = (props) => {
const { products } = props.state
const faces = products.map((item, index) =>{
                if(item.hasOwnProperty('id')){
                    return(<Face item={item} index={index}/>)                                
                }else{return <Ad  generateIndex={props.generateIndex} baseUrl={props.baseUrl} />}})                                                               
    return (
        <div className="main-container">  
            {faces}      
        </div>
    )
}

export default Grid