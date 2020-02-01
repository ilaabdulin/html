import React, {useReducer} from 'react' 

import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducer'
import {SHOW_ALERT, HIDE_ALERT} from '../actionTypes'

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false});

    const show = (text, classes='warning') => {
        dispatch({
            type: SHOW_ALERT, 
            payload: {text, classes}
        })
    }

    const hide = () => {
        dispatch({
            type: HIDE_ALERT
        })
    }
    return (
        <AlertContext.Provider value = {{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

