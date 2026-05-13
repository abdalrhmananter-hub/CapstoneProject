// src/Shared/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside style={{ width: '16rem' }} className="bg-white border-end border-light-subtle d-flex flex-column h-100">
      {/* Brand Section */}
      <div className="p-4 border-bottom border-light-subtle">
        <div className="d-flex align-items-center gap-3">
          <img src="/AlexLogo.png" alt="Alexandria Logo" style={{ height: '2.5rem', width: 'auto' }} />
          <div>
            <h2 className="fs-2 fw-bold text-dark mb-0">Alexandria</h2>
            <p className="text-secondary small mb-0" style={{ letterSpacing: '0.025em' }}>BIBLIOPHILE EDITION</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow-1 p-3 d-flex flex-column gap-1">
        <Link
          to="/dashboard"
          className={`d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none transition ${
            isActive('/dashboard')
              ? 'bg-primary-subtle text-primary'
              : 'text-secondary-emphasis hover-bg-light'
          }`}
          style={{ transition: 'all 0.15s ease' }}
          onMouseEnter={(e) => {
            if (!isActive('/dashboard')) e.currentTarget.classList.add('bg-light');
          }}
          onMouseLeave={(e) => {
            if (!isActive('/dashboard')) e.currentTarget.classList.remove('bg-light');
          }}
        >
          <svg className="bi" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Dashboard</span>
        </Link>

        <Link
          to="/reading-list"
          className={`d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none transition ${
            isActive('/reading-list')
              ? 'bg-primary-subtle text-primary'
              : 'text-secondary-emphasis hover-bg-light'
          }`}
          style={{ transition: 'all 0.15s ease' }}
          onMouseEnter={(e) => {
            if (!isActive('/reading-list')) e.currentTarget.classList.add('bg-light');
          }}
          onMouseLeave={(e) => {
            if (!isActive('/reading-list')) e.currentTarget.classList.remove('bg-light');
          }}
        >
          <svg className="bi" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Reading List</span>
        </Link>

        <Link
          to="/clubs"
          className={`d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none transition ${
            isActive('/clubs')
              ? 'bg-primary-subtle text-primary'
              : 'text-secondary-emphasis hover-bg-light'
          }`}
          style={{ transition: 'all 0.15s ease' }}
          onMouseEnter={(e) => {
            if (!isActive('/clubs')) e.currentTarget.classList.add('bg-light');
          }}
          onMouseLeave={(e) => {
            if (!isActive('/clubs')) e.currentTarget.classList.remove('bg-light');
          }}
        >
          <svg className="bi" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Clubs</span>
        </Link>

        <Link
          to="/profile-settings"
          className={`d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none transition ${
            isActive('/profile-settings')
              ? 'bg-primary-subtle text-primary'
              : 'text-secondary-emphasis hover-bg-light'
          }`}
          style={{ transition: 'all 0.15s ease' }}
          onMouseEnter={(e) => {
            if (!isActive('/profile-settings')) e.currentTarget.classList.add('bg-light');
          }}
          onMouseLeave={(e) => {
            if (!isActive('/profile-settings')) e.currentTarget.classList.remove('bg-light');
          }}
        >
          <svg className="bi" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profile Settings</span>
        </Link>

        <Link
          to="/privacy"
          className={`d-flex align-items-center gap-3 px-3 py-2 rounded text-decoration-none transition ${
            isActive('/privacy')
              ? 'bg-primary-subtle text-primary'
              : 'text-secondary-emphasis hover-bg-light'
          }`}
          style={{ transition: 'all 0.15s ease' }}
          onMouseEnter={(e) => {
            if (!isActive('/privacy')) e.currentTarget.classList.add('bg-light');
          }}
          onMouseLeave={(e) => {
            if (!isActive('/privacy')) e.currentTarget.classList.remove('bg-light');
          }}
        >
          <svg className="bi" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Privacy</span>
        </Link>
      </nav>

      {/* + New Log Button - mt-auto pushes it to bottom */}
      <div className="p-3 border-top border-light-subtle mt-auto">
        <button
          className="w-100 py-2 px-3 rounded-3 d-flex align-items-center justify-content-center gap-2 border-0"
          style={{
            backgroundColor: '#114916',
            color: 'white',
            fontWeight: 500,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0b3a0f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#114916')}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Log
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;