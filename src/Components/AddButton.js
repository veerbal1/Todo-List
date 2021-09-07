import React from 'react'
import AddIcon from '../assets/add_icon.png'

function AddButton() {
    return (
        <div className="w-8 h-8 mx-2 cursor-pointer transition-transform transform hover:scale-125">
            <img src={AddIcon} alt="Add new task"/>
        </div>
    )
}

export default AddButton
