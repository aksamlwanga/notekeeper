import React, { useState ,useEffect} from 'react'
import { firestore } from "../firebase.js";

function Notes() {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [noteList, setNoteList] = useState([]);

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'title') {
            setNoteTitle(value);
        } else if (name === 'content') {
            setNoteContent(value);
        }
    };
    useEffect(() => {
        firestore.collection('note').onSnapshot(snapshot =>{
          setNoteList(snapshot.docs.map(doc=>doc.data()))
        })
      }, [])
    const writeNote = () => {
        firestore.collection("note").add({
            title: noteTitle,
            content: noteContent
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);

                setNoteTitle("");
                setNoteContent("");
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            })
    }

    return (
        <div>
            <header>
                <div className=''>
                    <h1>Note Keeper </h1>
                </div>
            </header>
            <div className=''>

                <input
                    type="text"
                    placeholder="Write a new note title..."
                    value={noteTitle}
                    name="title"
                    onChange={
                        (event) => onChangeHandler(event)
                    }
                />
                <input
                    type="textarea"
                    placeholder="Write a new note conent..."
                    value={noteContent}
                    name="content"
                    onChange={
                        (event) => onChangeHandler(event)
                    }
                />
                <button className="noteButton"
                    onClick={writeNote}>Add Note</button>


            </div>
            <div>
                <h1>Welcome !</h1>
                {
                    noteList.map(
                        (vari,i) => (
                            <div key={i}>
                                <h4>{vari.title}</h4>
                                <p>{vari.content}</p>
                            </div>

                        )
                    )
                }
            </div >
        </div>
    )
}

export default Notes
