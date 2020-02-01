import React, {useState, useContext} from 'react' 

import {AlertContext} from '../context/alertContext/alertContext'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import classes from './css/form.module.css'

export const Form = () => {
    const [value, setValue] = useState({
        name: '',
        aboutPoet: '',
        poetURL: ''
    });
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext)


    

    // console.log('ddfdsfsdfsdfsd',register.visible)
    // if (!reg.registe.visible)  
    

    const checkForm = (e) => {
        e.preventDefault();

        if (value.name.trim() && value.aboutPoet.trim() && value.poetURL.trim()) {
            firebase.addNote(value.name.trim(), value.aboutPoet.trim(), value.poetURL.trim() ).then(() => {alert.show('Заметка создана', 'success')})
                .catch(() => {alert.show('чтото пошло не твк', 'danger')})
            setValue({
                name: '',
                aboutPoet: '',
                poetURL: ''
            })
        } else {
            alert.show('ввввкедвыиавиыгуаылоавролловыа')
        }
    }
    return (
        // <form onSubmit = {checkForm}>
        //     <input></input>
        //     <input></input>
        //     <textarea
        //         placeholder = 'введите название'
        //         value = {value}
        //         onChange={e => setValue(e.target.value)}></textarea>
        //         <button >Нажать</button>
        // </form>

        <form onSubmit = {checkForm}>
            <input name="name" placeholder="название" className={classes.textbox} required  onChange={e => value.name = e.target.value}/>
            <input name="юэрэл картинки" placeholder="Введите URL" className={classes.textbox} onChange={e => value.poetURL = e.target.value}/>
            <textarea rows="4" cols="50" name="subject" placeholder="О поэте" className={classes.message}  onChange={e => value.aboutPoet = e.target.value}></textarea>
            <input name="submit" className={classes.button} type="submit" value="Отправить" />
        </form>
    )
    
}
