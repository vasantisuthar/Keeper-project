import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import db from '../firebase/firebase';



function Home() {
  
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addNotes, setAddNotes] = useState(false);

  useEffect(() => {
    db.collection("notes").onSnapshot((snapShot) => {
      setLoading(false);
      setNotes(
        snapShot.docs.map((doc) =>({
          id: doc.id,
          data : doc.data()
        }))
      )
    })
  }, []);

  function addNote(newNote) {
    setAddNotes(true);
    db.collection("notes").add({
      title: newNote.title,
      content: newNote.content
    }).then(() => {
      setAddNotes(false);
    })
  }

  function deleteNote(id) {
    db.collection('notes').doc(id).delete();
  }

  return (
    <div>
      <CreateArea onAdd={addNote}/>
      {loading && <div>Loading...</div>}
      {addNotes && <div>Adding note....</div>}
      {notes && notes.map((data, id) => {
        return (
          <Note
            key={data.id}
            id={data.id}
            title={data.data.title}
            content={data.data.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Home;
