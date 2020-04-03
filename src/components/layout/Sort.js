import React from 'react'

const Sort = (props) => {

    return (
        <div className="sort">
            <div className="sort_left">
                <div>Sort by:</div>
                <div onClick={() => props.clicked("id")} className="sort_option">id</div>
                <div onClick={() => props.clicked("price")} className="sort_option">price</div>
                <div onClick={() => props.clicked("size")} className="sort_option">sort</div>
            </div>
            <div className="sort_right">ASCII SHOP</div>    
        </div>
    )
}


export default Sort