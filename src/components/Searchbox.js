// import React from 'react';
// import './Searchbox.css';
//
// const Searchbox = ({onSearchChange}) => {
//   return (
//     <div className="search">
//       <input onChange={onSearchChange} type="search" placeholder="search cat..." />
//     </div>
//   )
// };
//
// export default Searchbox;
import React from 'react';
import './Searchbox.css';

const Searchbox = ({onSearchChange}) => {
  return (
    <div className="searchInput">
      <input onChange={onSearchChange} type="search" placeholder="search cat..." />
    </div>
  )
};

export default Searchbox;
