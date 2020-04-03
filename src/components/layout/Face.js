import React from 'react'

 const Face = (props) => {
    const {id, size, price, face, date} = props.item
    // Format price from cents to dollars
    const formatPrice = () =>{
        let priceInDollars = price / 100;
        return priceInDollars.toFixed(2)
    }

    // Format date 
    const dateDifference = () =>{
        let date1 = new Date(date);
        let date2 = new Date();
        let difference = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24));
        if(difference == 0){
            return "today"
        } else if(difference <= 7){
            return difference + " days ago"
        } else{
            let month = date1.getUTCMonth() + 1;
            let day = date1.getUTCDate();
            let year = date1.getUTCFullYear();
            return month + '/' + day + '/' + year
        }
    }

    const fontSize = {
        fontSize: `${size}px`
    }

    return (
        <div key={id} className="main-card">
            <div style={fontSize} className="titleBx">{face}</div>
            <div className="contentBx">
                <h2>Ascii face</h2>
                <p>Added:{" " + dateDifference()}</p>
                <div className="size">
                    <h3>Size:</h3>
                    <span>{size}px</span>
                </div>
                <div className="price">
                    <h3>Price:</h3>
                    <span>${formatPrice()}</span>
                </div>
                <a href="#">Buy Now</a>
            </div>
        </div>
    )
}


export default Face