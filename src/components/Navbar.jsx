import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <a className="navbar-brand" href="/about">About</a>


        <div className="auth-content">
          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">
            Login
          </button>

          {/*  Login Modal  */}
          <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="email my-2">
                    <label htmlFor="email" className='mx-2'>Email</label>
                    <input type="email" id='email' placeholder='enter email' />
                  </div>
                  <div className="pwd my-2">
                    <label htmlFor="pwd" className='mx-2'>Password</label>
                    <input type="password" id='pwd' placeholder='enter password' />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>


          <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#signupModal">
            Signup
          </button>

          {/*  Signup Modal  */}
          <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="name my-2">
                    <label htmlFor="name" className='mx-2'>Name</label>
                    <input type="text" id='name' placeholder='enter name' />
                  </div>
                  <div className="enrollment my-2">
                    <label htmlFor="enrollment" className='mx-2'>Enrollment no.</label>
                    <input type="text" id='enrollment' placeholder='enter enrollment no.' />
                  </div>
                  <div className="email my-2">
                    <label htmlFor="email" className='mx-2'>Email</label>
                    <input type="email" id='email' placeholder='enter email' />
                  </div>
                  <div className="pwd my-2">
                    <label htmlFor="pwd" className='mx-2'>Password</label>
                    <input type="password" id='pwd' placeholder='enter password' />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar