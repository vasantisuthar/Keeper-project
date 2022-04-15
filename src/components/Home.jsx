import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import db from '../firebase/firebase';



function Home() {
  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.collection("notes").onSnapshot((snapShot) => {
      setNotes(
        snapShot.docs.map((doc) =>({
          id: doc.id,
          data : doc.data()
        }))
      )

    })
    console.log(notes)

  }, []);

  function addNote(newNote) {
    db.collection("notes").add({
      title: newNote.title,
      content: newNote.content
    }).then(() => {
      console.log("data added")
    })
    // setNotes((prevNotes) => {
    //   return [...prevNotes, newNote];
    // });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleEditChange(id, text){
    setEdit(id);
  }

  return (
    <div>
      <CreateArea onAdd={addNote} onEdit={handleEditChange}/>
      {notes.map((data, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Home;
