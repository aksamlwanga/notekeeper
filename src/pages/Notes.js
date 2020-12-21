import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../Providers/UserProvider";
import { firestore } from "../firebase.js";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBTypography, MDBAlert } from "mdbreact";
import NoteModal from '../Components/NoteModal';

function Notes() {

    const [noteTitle, setNoteTitle] = useState("");
    const [error, setError] = useState("")
    const [noteContent, setNoteContent] = useState("");
    const [noteList, setNoteList] = useState([]);
    const user = useContext(UserContext);
    const { uid } = user;

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'title') {
            setNoteTitle(value);
        } else if (name === 'content') {
            setNoteContent(value);
        }
    };

    useEffect(() => {
        const notelist = [];
        firestore.collection('note').where("userid", "==", uid).onSnapshot(snapshot => {
            snapshot.docs.forEach(note => {
                let currentID = note.id

                let appObj = { ...note.data(), 'id': currentID }
                notelist.push(appObj)
            })
            setNoteList(notelist);
            // setNoteList(snapshot.docs.map(doc => doc.data()))
        })
    }, [uid])
    const writeNote = () => {
        if (!noteTitle && !noteContent)
            setError("Title and content must not be empty")
        else if (!noteTitle)
            setError("Title field  of note is required")
        else if (!noteContent)
            setError("Content field must have something")
        else {
            firestore.collection("note").add({
                title: noteTitle,
                content: noteContent,
                check: false,
                userid: uid
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
    }
    const updateRead = (noteId, checked) => {
        var newCheck = !checked;
        firestore.collection("note").doc(noteId).update({
            check: newCheck
        }).then(function () {
            console.log("Document successfully updated");

            window.location.reload()
        }).catch(function (error) {
            console.error("Error in Updating the document: ", error);
        });


    }


    return (
        <div>
            <MDBCard style={{ width: "80%" }}>
                <MDBCardBody >
                    {error ? <MDBAlert color="warning" dismiss>
                        <strong>Ooops!</strong> {error}
                    </MDBAlert> : ""}
                    <MDBCardTitle>Add New Note </MDBCardTitle>
                    <MDBInput
                        type="text"
                        label="  Write a new note title..."
                        value={noteTitle}
                        name="title"
                        onChange={
                            (event) => onChangeHandler(event)
                        }
                    />
                    <MDBInput
                        type="textarea"
                        label="  Write a new note content..."
                        value={noteContent}
                        name="content"
                        onChange={
                            (event) => onChangeHandler(event)
                        }
                    />
                    <MDBBtn className="noteButton"
                        onClick={writeNote}>Add Note</MDBBtn>

                </MDBCardBody>
            </MDBCard>
            <br />
            <div>

                <MDBTypography tag='h2' variant="h2-responsive">Notes List</MDBTypography>


                {noteList.length === 0 ?
                    <MDBTypography tag="p">  Notes list is empty !!, feel free to add one from up there</MDBTypography>
                    :
                    noteList.map(
                        (vari, i) => (
                            <div key={i}>

                                <MDBCard>
                                    <MDBCardBody >


                                        <MDBCardTitle style={{ textDecorationLine: vari.check ? 'line-through' : "" }}>
                                            {vari.check ?
                                                <input type="checkbox" checked onChange={() => updateRead(vari.id, vari.check)} />
                                                : <input type="checkbox" onChange={() => updateRead(vari.id, vari.check)} />} {vari.title} </MDBCardTitle>
                                        <hr />
                                        <p style={{ textDecorationLine: vari.check ? 'line-through' : "" }} >   {vari.content}</p>
                                        <NoteModal id={vari.id} title={vari.title} content={vari.content} />


                                    </MDBCardBody>
                                </MDBCard>

                                <br />
                            </div>


                        )
                    )
                }
            </div >
        </div>
    )
}

export default Notes
