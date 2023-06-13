// import React from 'react'
// import "../style/Navbar.css"
// // import { Link } from 'react-router-dom'
// import SignIn from './SignIn-Register/Signin'
// export default function Navbar(user) {
//     return <>
//         <section className='nav-bar'>
//             <div className='brand-name'>Tuner</div>
//             <div className='search-bar'>
//                 <form method='post' action='#'>
//                     <input
//                         type='text'
//                         placeholder='Search'
//                     />
//                 </form>
//             </div>
//             {
//                 user ? <div className='user'>
//                     <span className='login'>My Videos</span>
//                     <span>|</span>
//                     <span className='login'>Upload</span>
//                     <span>|</span>
//                     <span className='login'>Sign Out</span>
//                 </div>
//                     : <div className='sign'>
//                         <span className='login'>Login</span>
//                         <span>|</span>
//                         <span className='login'>Register</span>
//                     </div>
//             }

import { Link } from "react-router-dom";

//         </section>
//     </>

// }


export default function Navbar({ user }) {
    return (
      <>
        <section className='nav-bar'>
          <div className='brand-name'>Tuner</div>
          <div className='search-bar'>
            <form method='post' action='#'>
              <input
                type='text'
                placeholder='Search'
              />
            </form>
          </div>
          {user ? (
            <div className='user'>
              <span className='login'>My Videos</span>
              <span>|</span>
              <span className='login'>Upload</span>
              <span>|</span>
              <span className='login'>Sign Out</span>
            </div>
          ) : (
            <div className='sign'>
              <Link to="/signin" className='login'>Login</Link>
              <span>|</span>
              <Link to="/register" className='login'>Register</Link>
            </div>
          )}
        </section>
      </>
    );
  }
  