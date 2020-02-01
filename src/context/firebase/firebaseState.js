import React, {useReducer} from 'react' 
import axios from 'axios'

import {SHOW_LOADER, FETCH_NOTES, ADD_NOTE} from '../actionTypes'
import {firebaseReducer} from './firebaseReducer'
import {FirebaseContext} from './firebaseContext'

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [], 
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () =>  {
        showLoader();
        const res = await axios.get(`${url}/notes.json`)

        console.log('fetchNotes', res.data)

       

        const payload = Object.keys(res.data).map(key => {
             
                   return {...res.data[key], id: key} 
                    
                
               
            
        })

        dispatch({
            type: FETCH_NOTES, 
            payload
        })
    }

    const addNote = async (title, text, imageCard) => {
        const note = {
            title, text, imageCard
        }

        
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note,
                id: res.data.name
            }
            console.log('addNote', res.data)

            dispatch({
                type: ADD_NOTE,
                payload
            })
    
        } catch(e) {
            throw new Error(e.message)
        }
    }

    return (
        <FirebaseContext.Provider value = {{
            showLoader, addNote, fetchNotes, 
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}