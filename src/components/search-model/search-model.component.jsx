import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

import {BsQuestionCircle } from "react-icons/bs";


import './search-model.styles.scss';

const SearchModal = ({ handleChange }) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



  return (
    <div>
      {
        modal &&
        (<div className="search-modal">
          <div className="overlay" onClick={toggleModal} />
          <div className="modal-content">
            <div className="search-bar">
              <BsSearch className="serach-icon" />
              <input
                type="text"
                placeholder="Search Our Catalog"
                onChange={handleChange}
                className="search"

              />

            </div>
            <div className="popular-search">
               <h3>Popular Searches</h3>
               </div>
               <div className="options">
                 <ul>
                   <li><a href="#">Data Science</a></li>
                   <li><a href="#">Python</a></li>
                   <li><a href="#">Web Development</a></li>
                   <li><a href="#">HTML</a></li>
                   <li><a href="#">Java</a></li>
                 </ul>
               </div>
               <div className="help-center">
               <BsQuestionCircle/>
               <a href="#">Help Center</a>
               </div>
             
          </div>
        </div>

        )
      }
      <BsSearch className='search_icon' onClick={toggleModal} />
    </div>
  )
};

export default SearchModal;