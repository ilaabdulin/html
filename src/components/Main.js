import React from 'react' 

import classes from './css/main.module.css'

export const Main = ({notes}) => {
    
    return (
        <div className = {classes.main}>
            {notes.map(note => { 
                return (
                    <div key = {note.id} className={classes.card}

                         onMouseEnter = {e => {e.target.style.marginTop = '10px'; e.target.style.marginBottom = '10px'}} 
                         onMouseLeave = {e => {e.target.style.marginTop = '0px'; e.target.style.marginBottom = '0px'}}
                         >
                            <h2>{note.title}</h2>
                            <p><img src={note.imageCard} className={classes.leftimg} />
                            {note.text}</p>
                    </div>
                )
                
            })}
        </div> 
    )

}


   