import { useDispatch, useSelector } from "react-redux";
import { AddCard, UUID } from "../types/cardTypes";
import { RootState } from "../store";
import { setActiveCard } from "../reducers/cardsReducer";
import { SyntheticEvent, useMemo } from "react";
import { deletePhoto, setVisibleDelete } from "../reducers/deletePhotoReducer";
import noPhoto from "../photos/no-photo.png";

function DisplayCards({uuid, label, url}: AddCard)
{
    const cards = useSelector((state: RootState) => state.cards);
    const dispatch = useDispatch();
    const heightClasses = ["card-wrapper-small", "card-wrapper-medium", "card-wrapper-big"]

    const classIndex = useMemo(() => createRandomInt(), []);

    function handleActiveCard(activeCard: UUID | null)
    {
        console.log(cards.cards);
        dispatch(setActiveCard(activeCard));
    }

    function createRandomInt()
    {
        return Math.floor(Math.random() * 3);
    }

    function handleDeleteClick()
    {
        console.log(uuid);
        dispatch(deletePhoto(uuid));
        dispatch(setVisibleDelete(true));
    }

    function handleHover(isHovered: boolean, activeCard: UUID | null)
    {
        if(isHovered) handleActiveCard(activeCard);
        else handleActiveCard(null);
    }

    function handleFailedUrlFetch(e: SyntheticEvent)
    {
        (e.target as HTMLImageElement).src = noPhoto;
    }

    return(
        <div className={`card-wrapper ${heightClasses[classIndex]}`} onMouseOver={() => handleHover(true, uuid)} onMouseLeave={() => handleHover(false, uuid)}>

            <img className="card-photo" src={url} onError={handleFailedUrlFetch} alt={noPhoto} />
            <div className={`card-hover-wrapper ${cards.activeCard === uuid ? "card-hover-wrapper-active" : "card-hover-wrapper-fade-out"} `}>
                <div className="card-delete-button-wrapper">
                    <button className="card-delete-button" onClick={handleDeleteClick}>delete</button>
                </div>

                <h2 className="card-headline">{label}</h2>
            </div>
        </div>
    )
}

export default DisplayCards;