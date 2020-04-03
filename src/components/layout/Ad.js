import React from 'react'

const Ad = (props) => {

    return (
        <div className="ad">
            <div className="ad__text">
                <h1>Products Grid</h1>
                <p>But first, a word from our sponsors:</p> 
            </div>
            <img className="add" src={props.baseUrl + '/ads/?r='+ props.generateIndex()}></img>
        </div>
    )
}

export default Ad

