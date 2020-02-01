import React, {useContext, useEffect} from 'react' 
import {Alert} from './Alert'
import {Form} from './Form'
import {Main} from './Main'
import {Loader} from './Loader'
import {FirebaseContext} from '../context/firebase/firebaseContext'

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])
    return (
        <div className='content'>
            <Alert/>
            <Form/>
            <hr/>
            {
                loading ? <Loader/> :
                <Main notes = {notes} onRemove={removeNote}/>
            }
          </div>
    )
}