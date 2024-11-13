import React from 'react'
import { useState } from 'react';
import MenuList from './menuList'

export default function MenuItem({ item }) {
    const [currentListChildren, setCurrentListChildren] = useState({});

    function handleChildrenToggle(currentLabel) {
        setCurrentListChildren(
            { ...currentListChildren, [currentLabel]: !currentListChildren[currentLabel] }
        )
        
    }

    return <li className='mt-5'>
        <div className='flex gap-2 cursor-pointer items-center'>
            <p>{item.label}</p>
            {
                item.children && item.children.length ? <span className='text-xl' onClick={() => handleChildrenToggle(item.label)}>{currentListChildren[item.label] ? "-": "+"}</span> : null
            }
        </div>
        {
            item && item.children && item.children.length && currentListChildren[item.label] ?
                <MenuList list={item.children} />
                : null
        }
    </li>
}