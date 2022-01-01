import { useEffect, useState } from "react" 
import { Link } from "react-router-dom"
import NotesServices from "../Services/NotesServices"



function NotesList() {

    const [notes, setNotes] = useState([])

    useEffect(()=>{
        NotesServices.getAll()
           .then(response =>{
               console.log('printing response',response.data)
               setNotes(response.data)

           })
           .catch(error =>{
               console.log('Something went wrong',error)
           })
    },[])
    return (
        <div className="main-content">
            <h4>List Of Notes</h4>
            <div className="notes-list mt-4">
            {
               notes.length>0 ? notes.map(note =>(
                   <div key={note.id} className="notes-preview mt-3"> 
                       <Link to="#">
                       <h5 className="primary-color text-capitalize" >{note.title}</h5>
                       <p>{note.body}</p>
                       </Link>
                   </div> 
                )) : <div>No notes Available</div>
            }
            </div>
        </div>
    )
}

export default NotesList
