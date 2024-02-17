import Header from './components/Header/Header';
import NoteForm from './components/NoteForm/NoteForm';
import NoteItem from './components/NoteItem/NoteItem';
import './App.css'
import { useEffect, useState } from 'react';
import Note from './components/models/Note';


function App() {

  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:7070/notes', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((result) => setNotes(result))
    
  }, []);
  
 const addNote = (newNote: Note) => {
  const note = {
    ...newNote,
  }
  setNotes(prev => [...prev, note])
 }

 const deleteNote = (id: number) => {
  fetch(`http://localhost:7070/notes/${id}`, {
    method: 'DELETE'
  })
  fetch('http://localhost:7070/notes', {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((result) => setNotes(result))
 }



  console.log(notes)
  const update = () => {
      fetch('http://localhost:7070/notes', {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((result) => setNotes(result))
  }
  return (
    <div className='main'>
      <Header update={update}/>
      <div className='notes'>
      {notes.map(i => {
        return(
          <NoteItem item = {i} key = {i.id} deleteItem={() => deleteNote(i.id)}/>
        )
        
      })}
      </div>
      <NoteForm addNote={addNote} />
    </div>
  )
}

export default App
