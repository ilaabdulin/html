import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'

import {AlertContext} from '../context/alertContext/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (!alert.visible) {
        return null
    }

    return (
        // <CSSTransition
        //     in={alert.vivible}
        //     timeout={750}
        //     classNames={'alert'}
        //     mountOnEnter
        //     unmountOnExit>
            <div className= {alert.classes}>
                <div>
                    {alert.text}
                </div>
                <button onClick={hide}>Убрать</button>
            </div>
        // </CSSTransition>
        
    )
}