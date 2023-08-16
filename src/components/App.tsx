import '../css/App.css'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import AddPhotoModal from './AddPhotoModal'
import DisplayCards from './displayCards'
import "../css/cards.css";
import DeletePhotoModal from './DeletePhotoModal'
import { /*useEffect,*/ useMemo } from 'react'
import { setCards } from '../reducers/cardsReducer'
import { AddCard } from '../types/cardTypes'
import { setScreenSize, setToggle } from '../reducers/fetchToggleReducer'

function App() {
  const addPhotoState = useSelector((state: RootState) => state.addPhoto);
  const cards = useSelector((state: RootState) => state.cards);
  const deletePhotoState = useSelector((state: RootState) => state.deletePhoto);
  const navState = useSelector((state: RootState) => state.nav);
  const fetchToggle = useSelector((state: RootState) => state.toggle);
  const dispatch = useDispatch();

  useMemo(() => {
    fetch(/*"http://localhost:3000/photos"*/ "https://my-unsplash.adaptable.app/photos", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then(res => res.json())
    .then(res => {
      if(navState.query)
      {
        const currentCards = res.filter((card: AddCard) => card.label.includes(navState.query));
        dispatch(setCards(currentCards));
      }
      else{
        dispatch(setCards(res))
      }

      window.addEventListener("resize", () => {
          dispatch(setScreenSize());
      })

    })
    .catch((err) => {
      console.log(err);
      setTimeout(() => {
        dispatch(setToggle());
      }, 500)
    })
  }, [fetchToggle.toggle])


  return (
    <div className="app-wrapper">
      <Nav/>
      {addPhotoState.visible === true ? <AddPhotoModal/> : ""}
      <div className="cards-wrapper">
        <div className='cards-container'>
          {cards.cards.filter((_card, index) => index % (fetchToggle.screenSize > 1000 ? 3 : 2) === 0).map(card => <DisplayCards key={card.uuid} uuid={card.uuid} label={card.label} url={card.url}/>)}
        </div>

        <div className='cards-container'>
          {cards.cards.filter((_card, index) => index % (fetchToggle.screenSize > 1000 ? 3 : 2) === 1).map(card => <DisplayCards key={card.uuid} uuid={card.uuid} label={card.label} url={card.url}/>)}
        </div>

        {fetchToggle.screenSize > 1000 ? <div className='cards-container'>
          {cards.cards.filter((_card, index) => index % 3 === 2).map(card => <DisplayCards key={card.uuid} uuid={card.uuid} label={card.label} url={card.url}/>)}
        </div> : ""}

      </div>

      {deletePhotoState.isVisible ? <DeletePhotoModal id={deletePhotoState.id} isVisible={false}/> : ""}
    </div>
  )
}

export default App;
