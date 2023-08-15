import { useDispatch } from "react-redux";
import { removeCard } from "../reducers/cardsReducer";
import { DeletePhotoProps } from "../types/deletePhotoTypes";
import { setVisibleDelete } from "../reducers/deletePhotoReducer";
import { closeModal } from "../utils/closeModal";

function DeletePhotoModal({id}: DeletePhotoProps)
{
    const dispatch = useDispatch();

    function handleCancel(e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>)
    {
        if((e.target as unknown as HTMLDivElement).id === "modal-background-deletePhoto" || (e.target as unknown as HTMLButtonElement).id === "modal-cancel-deletePhoto")
        {
            closeModal("modal-background-deletePhoto", setVisibleDelete, dispatch);
        }
    }

    function handleDelete()
    {
        console.log(id);
        fetch("http://localhost:3000/photos", {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uuid: id
            })
        })
        dispatch(removeCard(id));
        closeModal("modal-background-deletePhoto", setVisibleDelete, dispatch);
        //dispatch(setVisibleDelete(false));
    }

    return(
        <div className="modal-background-wrapper"onClick={handleCancel} id="modal-background-deletePhoto">
            <div className="modal-wrapper" >
                <h1 className="modal-headline">Are you sure?</h1>

                <div className="modal-input-wrapper">
                    <label className="modal-label" htmlFor="password">Label</label>
                    <input className="modal-input" type="password" id="password" placeholder="***********"/>
                </div>

                <div className="modal-button-wrapper">
                    <button className="modal-button modal-button-light" onClick={handleCancel} id="modal-cancel-deletePhoto">Cancel</button>
                    <button className="modal-button modal-button-red" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default DeletePhotoModal;