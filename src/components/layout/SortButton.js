import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const SortButton = (props) => {

    
        return (
            <div>
                <Dropdown className="sort-button">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.clicked("id")} >Id</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.clicked("price")} >Price</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.clicked("size")} >Size</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    
}

export default SortButton