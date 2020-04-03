import React from 'react'
import SortButton from './SortButton'

 const Header = (props) => {
    return (
        <React.Fragment>
        <div className="header">
            <header>
                <h1>Products Grid</h1>

                <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

                <p>But first, a word from our sponsors:</p> 
                <img class="ad" src={props.baseUrl + '/ads/?r='+ props.generateIndex()}/>
            </header> 
        </div>
        <SortButton clicked={props.clicked}/>
        </React.Fragment>
    )
}

export default Header