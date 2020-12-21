import React, { useState } from 'react';
import { firestore } from "../firebase.js";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBInput } from 'mdbreact';

function NoteModal(props) {
    const [modal,setModal]=useState(false);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

    const toggle = () => {
        setModal(!modal);

    }
    
    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'title') {
            setNoteTitle(value);
        } else if (name === 'content') {
            setNoteContent(value);
        }
    };
    
    const updateNote = () => {
        firestore.collection("note").doc(props.id).update({
            title: noteTitle,
            content: noteContent,
        })
            .then(function () {
                setNoteTitle("");
                setNoteContent("");
                toggle()
                window.location.reload()
               
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            })

           
    }

    const removeNote=()=>{
        firestore.collection("note").doc(props.id).delete().then(function() {
            console.log("Document successfully deleted!");
            window.location.reload()
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

    }
        return (
            <MDBContainer>
               
                {/* BUTTON */}
                < MDBBtn style={{ float: "right" }} onClick={toggle}>
                    edit
                 </MDBBtn>
                < MDBBtn style={{ float: "right" }}  onClick={removeNote} >
                    remove
                 </MDBBtn>
                {/* MODAL */}
                <MDBModal isOpen={modal} toggle={toggle}    >
                    <MDBModalBody>
                        <MDBInput
                            label="Edit Note Title"
                            valueDefault={props.title}
                            type="text"
                            name="title"
                            onChange={
                                (event) => onChangeHandler(event)
                            }

                        />
                        <MDBInput
                            label="Edit Note Content"
                            type="textarea"
                            valueDefault={props.content}
                            name="content"
                            onChange={
                                (event) => onChangeHandler(event)
                            }

                        />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={updateNote} >Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    
}
export default NoteModal;