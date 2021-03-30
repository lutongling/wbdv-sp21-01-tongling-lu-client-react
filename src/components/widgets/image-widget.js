import React from 'react'

const ImageWidget = ({widget, editingWidget, setWidget, editing}) => {
    return (
        <div>
            {
                !editing &&
                <img src={widget.src} width={widget.width} height={widget.height}/>
            }
            {
                editing &&
                    <div>
                        URL
                        <input onChange={(e) => setWidget(widget => ({...widget, src: e.target.value}))}
                               value={editingWidget.src}
                               className="form-control"/>
                        width
                        <input onChange={(e) => setWidget(widget => ({...widget, width: e.target.value}))}
                               value={editingWidget.width} className="form-control"/>
                        height
                        <input onChange={(e) => setWidget(widget => ({...widget, height: e.target.value}))}
                               value={editingWidget.height} className="form-control"/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget