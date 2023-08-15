import { useDispatch, useSelector } from "react-redux";
import logo from "../photos/my_unsplash_logo.svg";
import search from "../photos/search.svg";
import "../css/nav.css";
import { setVisible } from "../reducers/addPhotoReducer";
import { useMemo, useState } from "react";
import { setSearchQuery } from "../reducers/navReducer";
import { RootState } from "../store";
import { setToggle } from "../reducers/fetchToggleReducer";

function Nav()
{
    const dispatch = useDispatch();
    const fetchToggle = useSelector((state: RootState) => state.toggle);
    let iteration = useMemo(() => 0, []);
    let intervalToggle = useMemo(() => false, []);
    const stepLength = 22.727272727272727;

    const [navToggle, setNavToggle] = useState(false);

    function handleAddPhoto()
    {
        dispatch(setVisible(true));
        setSteps();
    }

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>)
    {
        dispatch(setSearchQuery(e.target.value));
        dispatch(setToggle());
    }

    function CreateMobileNav()
    {
        return(
            <div className="nav-right-mobile-content-wrapper">

                <div className="nav-right-mobile-wrapper" onClick={() => setNavToggle(navToggle => !navToggle)}>
                    <div className={navToggle ? "nav-right-bar rotate-bar-one" : "nav-right-bar"}></div>
                    {navToggle ? "" : <div className="nav-right-bar"></div>}
                    <div className={navToggle ? "nav-right-bar rotate-bar-two" : "nav-right-bar"}></div>
                </div>

                <div className={navToggle ? "nav-right-sidebar nav-right-opened" : "nav-right-sidebar"}>
                    <div className="nav-button-wrapper">
                        <button className="nav-button" onClick={handleAddPhoto}>Add a photo</button>
                    </div>

                    {fetchToggle.screenSize <= 550 ?
                    <div className="nav-input-wrapper">

                        <label className="nav-input-label" htmlFor="search">
                            <img className="nav-input-icon" src={search} alt="search" />
                        </label>

                        <input className="nav-search" type="text" placeholder="Search by name" id="search" onChange={(e) => handleSearch(e)}/>
                    </div> : ""}
                </div>
            </div>
        );
    }

    function startTimer()
    {
        intervalToggle = true;

        function startInterval()
        {
            if(iteration === 22) return;
            if(!intervalToggle) return;

            setTimeout(() => {
                document.documentElement.style.setProperty("--step-mask-position", `${(iteration * 4.55)}%`);
                iteration++;
                startInterval();
            }, stepLength)
        }

        startInterval();
    }

    function setSteps()
    {
        intervalToggle = false;

        function endInterval()
        {

            if(iteration === 0) {
                document.documentElement.style.setProperty("--step-mask-position", `${(iteration * 4.55)}%`);
                return;
            }
            if(intervalToggle) return;

            setTimeout(() => {
                document.documentElement.style.setProperty("--step-mask-position", `${(iteration * 4.55)}%`);
                iteration--;
                endInterval();
            }, stepLength)
        }
        endInterval()
    }

    const mobileNav = useMemo(CreateMobileNav, [navToggle, fetchToggle.screenSize])

    return(
        <nav className="nav-wrapper">
            <div className="nav-left-wrapper">
                <img className="nav-logo" src={logo} alt="logo" />
                {
                    fetchToggle.screenSize > 550 ?
                    <div className="nav-input-wrapper">

                        <label className="nav-input-label" htmlFor="search">
                            <img className="nav-input-icon" src={search} alt="search" />
                        </label>

                        <input className="nav-search" type="text" placeholder="Search by name" id="search" onChange={(e) => handleSearch(e)}/>
                    </div> : ""
                }

            </div>

            {fetchToggle.screenSize > 780 ?
             <div className="nav-right-wrapper">
                <div className="nav-button-wrapper">
                    <button className="nav-button" onClick={handleAddPhoto} onMouseOver={startTimer} onMouseLeave={setSteps}>Add a photo</button>
                </div>
            </div>

                :

            mobileNav}
        </nav>
    )
}

export default Nav;