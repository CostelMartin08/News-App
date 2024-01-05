import React, { useEffect, useState } from "react";
import { useNewsContext } from "../NewsContext";
import { useNavigate, useParams } from "react-router-dom";

const Header = () => {

    const { fetchData, lastSearchTerm } = useNewsContext();
    const [displayBar, setDisplayBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { param } = useParams();
    const navigate = useNavigate();


    {/*   useEffect(() => {

        fetchData('WorldNews');

    }, [])

*/}


    const search = (param) => {
        navigate(`/${param}`);
        fetchData(param);
    }

    const searchBar = () => {

        setDisplayBar(!displayBar);

    }

    const searchKey = (event) => {

        navigate(searchTerm);
        event.preventDefault();
        fetchData(searchTerm);
        setSearchTerm('');
        setDisplayBar(false);

    }

    return (

        <>
            <header className="border-bottom lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="link-secondary" href="#">Subscribe</a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="font-mod blog-header-logo text-body-emphasis text-decoration-none" href="#">News</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a
                            onClick={() => searchBar()}
                            className="link-secondary"
                            href="#"
                            aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </a>
                    </div>
                </div>
            </header>




            <div className="nav-scroller py-1 mb-2 border-bottom">
                <nav className="nav nav-underline justify-content-between">
                    <a onClick={() => search('world')} className="nav-item nav-link link-body-emphasis">World</a>
                    <a onClick={() => search('US')} className="nav-item nav-link link-body-emphasis">U.S.</a>
                    <a onClick={() => search('technology')} className="nav-item nav-link link-body-emphasis">Technology</a>
                    <a onClick={() => search('design')} className="nav-item nav-link link-body-emphasis" >Design</a>
                    <a onClick={() => search('culture')} className="nav-item nav-link link-body-emphasis">Culture</a>
                    <a onClick={() => search('politics')} className="nav-item nav-link link-body-emphasis">Politics</a>
                    <a onClick={() => search('opinion')} className="nav-item nav-link link-body-emphasis">Opinion</a>
                    <a onClick={() => search('science')} className="nav-item nav-link link-body-emphasis">Science</a>
                    <a onClick={() => search('health')} className="nav-item nav-link link-body-emphasis">Health</a>
                    <a onClick={() => search('style')} className="nav-item nav-link link-body-emphasis">Style</a>
                    <a onClick={() => search('travel')} className="nav-item nav-link link-body-emphasis">Travel</a>
                </nav>
            </div>

            {displayBar ?

                <form
                    onSubmit={searchKey}
                    className="d-flex justify-content-center">

                    <div className="input-div">
                        <i className="input-fa-stl fa-solid fa-magnifying-glass"></i>

                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by keywords"
                            className="input-stl w-100"
                            type="text"></input>
                    </div>

                    <button
                        type="submit"
                        className="input-btn-stl">Search
                    </button>

                </form>

                : null}
        </>
    )
}

export default Header;