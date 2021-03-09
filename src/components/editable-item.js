import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item = {title: "Some title", _id: "ABC"},
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
                            <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
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
                        }} className="fas fa-check"></i>
                        <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                    </>
                }

            </>
         )
}

export default EditableItem