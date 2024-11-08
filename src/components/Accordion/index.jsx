import React, { useState } from 'react'
import './style.css'
import data from './data'

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSeleciton, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleAccordion(currentId) {
        setSelected(currentId === selected ? null : currentId)
    }

    function handleMultipleSelection(currentId) {
        const copyMultiple = [...multiple];
        const findIndexOfCurrentID = multiple.indexOf(currentId);

        if (findIndexOfCurrentID === -1) { copyMultiple.push(currentId) }
        else { copyMultiple.splice(findIndexOfCurrentID, 1) }

        setMultiple(copyMultiple);
    }

    return <div className='wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSeleciton)} className='btn'>{enableMultiSeleciton ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ? data.map((dataItem, index) => (
                    <div className="item" key={index}>
                        <div className="title" onClick={enableMultiSeleciton ?
                            () => { handleMultipleSelection(dataItem.id) }
                            : () => { handleSingleAccordion(dataItem.id) }}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSeleciton ?
                                (multiple.indexOf(dataItem.id) != -1 ? <p className='content'>{dataItem.answer}</p> : null)
                                : (selected === dataItem.id ?
                                    <p className='content'>{dataItem.answer}</p>
                                    : null)
                        }
                    </div>
                )) : <div>NO Data Found!</div>
            }
        </div>
    </div>

}