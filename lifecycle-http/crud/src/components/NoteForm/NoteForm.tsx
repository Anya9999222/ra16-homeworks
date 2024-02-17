import { useState } from "react";
import './NoteForm.css';
import Note from "../models/Note";

interface FormProps {
    addNote: (newNote: Note) => void
}
const NoteForm = ({addNote}: FormProps) => {
    const [newNote, setNewNote] = useState({});
    const handleChange = (e) => {
        let value: string;
        value = e.target.value;
        setNewNote(prev => ({
            ...prev, 
            [e.target.name]: value
        }))
        }

    const updateList = (event) =>{
        event.preventDefault();
        addNote({
            ...newNote
        })
    } 
    console.log(newNote)
    const sendInfo = () => {
        if(!newNote){
            return
        }
        fetch('http://localhost:7070/notes', {
          method: 'POST',
          body: JSON.stringify(newNote)
        })
      }
      
    return(
        <div className="new-note">
            <div>New Note</div>
            <form className="note-form" onSubmit={updateList}>
                <textarea className="form-input"  name="content" onChange={handleChange}/>
                <button className="button-send" onClick={sendInfo}></button>
            </form>
        </div>
    )
}

export default NoteForm;