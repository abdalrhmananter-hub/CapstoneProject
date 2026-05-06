import React from 'react'
import Style from './navBar.module.css'
import logo from '../../assets/bookstores_logo_main.svg'
export default function Navbar() {
  return (
    <>
      <nav className='d-flex px-4 align-items-center justify-content-between'>
        <div>
          <img className={Style.navLogo} src={logo} alt='logo' />
        </div>
        <div className={`d-flex align-items-center gap-3 ${Style.color1}`}>
            <div className="d-flex align-items-center gap-2">
                <i class="bi bi-cart3 fs-3"></i>
                <a className={`mb-0 fs-5 ${Style.anker}`}>cart</a>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <i class="bi bi-tag fs-3"></i>
                <a className={`mb-0 fs-5 ${Style.anker}`}>sell</a>
            </div>
            <div>
                <button className={`btn btn-success rounded-5 fw-bold curser-pointer ${Style.button}`}>sign in</button>
            </div>

        </div>

      </nav>
    </>
  )
}