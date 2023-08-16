import { useDispatch, /*useSelector*/ } from "react-redux";
import "../css/modal.css";
import { setVisible } from "../reducers/addPhotoReducer";
//import { RootState } from "../store";
import { addCard } from "../reducers/cardsReducer";
import { useRef } from "react";
import { setToggle } from "../reducers/fetchToggleReducer";
import { closeModal } from "../utils/closeModal";

function AddPhotoModal()
{
    //const cards = useSelector((state: RootState) => state.cards);
    const dispatch = useDispatch();
    const labelRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const placeholder = "https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80".slice(0, 45) + "...";

    function handleCancel(e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>)
    {
        if((e.target as unknown as HTMLDivElement).id === "modal-background-addPhoto" || (e.target as unknown as HTMLButtonElement).id === "modal-cancel-addPhoto")
        {
            closeModal("modal-background-addPhoto", setVisible, dispatch);
        }
    }

    function handleSubmit()
    {
        const newCard = {
            uuid: crypto.randomUUID(),
            label: labelRef.current ? labelRef.current.value : "",
            url: urlRef.current ? urlRef.current.value : ""
        }
        fetch(/*"http://localhost:3000/photos"*/ "https://my-unsplash.adaptable.app/photos", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCard)
        })
        dispatch(addCard(newCard))

        closeModal("modal-background-addPhoto", setVisible, dispatch)
        dispatch(setToggle());
    }

    return(
        <div className="modal-background-wrapper"onClick={handleCancel} id="modal-background-addPhoto">

            <div className="modal-wrapper add-photo-wrapper">
                <h1 className="modal-headline">Add a new photo</h1>

                <div className="modal-input-wrapper">
                    <label className="modal-label" htmlFor="label">Label</label>
                    <input className="modal-input" type="text" id="label" placeholder="Suspendisse elit massa" ref={labelRef}/>
                </div>

                <div className="modal-input-wrapper">
                    <label className="modal-label" htmlFor="photoURL">Photo URL</label>
                    <input className="modal-input" type="text" id="photoURL" placeholder={placeholder} ref={urlRef}/>
                </div>

                <div className="modal-button-wrapper">
                    <button className="modal-button modal-button-light" onClick={handleCancel} id="modal-cancel-addPhoto">Cancel</button>
                    <button className="modal-button modal-button-green" onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </div>

    )
}

export default AddPhotoModal;