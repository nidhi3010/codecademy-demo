import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

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
          </div>
        </div>
        
        )
      }
      <BsSearch className='search_icon' onClick = {toggleModal} />
    </div>
  )
};

export default SearchModal;