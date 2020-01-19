import React from 'react'
import Navbar from '../Components/Navbar';

const Layout = props => {
  return (
    <>
      {props.auth ?
        <>
          <main className="main-content">
            <Navbar />
            <div className="container-fluid">
              {props.children}
            </div>
          </main>
        </>
        : props.children
      }
    </>
  );
}

export default Layout;