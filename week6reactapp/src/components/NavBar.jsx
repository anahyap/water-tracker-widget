import { useState } from "react";
import floatMark from "../assets/float-mark.png";

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="nav-bar">

            <div className="nav-main">

                <div className="nav-logo">
                    <img
  src={floatMark}
  alt="Float"
  className="nav-logo"
/>
                </div>


                <div className="nav-actions">

                    <button
                        className="nav-icon"
                        onClick={() => {
                            setSearchOpen(!searchOpen);
                            setMenuOpen(false);
                        }}
                    >
                        🔍
                    </button>


                    <button
                        className="nav-icon"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            setSearchOpen(false);
                        }}
                    >
                        ☰
                    </button>

                </div>

            </div>


            {searchOpen && (
                <div className="search-panel">
                    <input
                        type="text"
                        placeholder="Search Float..."
                    />
                </div>
            )}


            {menuOpen && (
                <div className="nav-menu">

                    <a href="#">Profile</a>
                    <a href="#">Onboarding</a>
                    <a href="#">Scheduling</a>
                    <a href="#">FAQ</a>

                </div>
            )}

        </nav>
        )}


export default NavBar;