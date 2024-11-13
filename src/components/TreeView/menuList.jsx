import React from 'react'
import MenuItem from './menuItem'

export default function MenuList ({list = []}){

    return <ul className="p-4 pl-6" >
        {
            list && list.length ? 
            list.map((listItem, index) =>(
                <MenuItem item={listItem} key={index} />
            ))
            : <h3>No List Found!</h3>
        }
    </ul>
}