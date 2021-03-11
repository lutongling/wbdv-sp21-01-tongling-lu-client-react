import React, {useState} from 'react'
import {Link} from "react-router-dom";

// Editable Item component
const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
         return (
            <>
                {
                    !editing &&
                    <>
                        <Link className={`nav-link ${active ? 'active' : ''}`}
                              to={to}>
                            {item.title} &nbsp;
                            <i onClick={() => setEditing(true)} className="fas fa-edit fa-pull-right"></i>
                        </Link>
                    </>
                }
                {
                    editing &&
                    <>
                        <input
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    title: e.target.value
                                })}
                            value={cachedItem.title}/>
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(cachedItem)
                        }} className="fas fa-check fa-pull-right"></i>
                        <i onClick={() => deleteItem(item)} className="fas fa-times fa-pull-right"></i>
                    </>
                }

            </>
         )
}

export default EditableItem