import React from 'react'
import MenuList from './menuList'

export default function TreeView ({menus = []}){

    return <div className="h-screen w-1/4 bg-blue-500 text-white">
        <MenuList list={menus} />
    </div>
}