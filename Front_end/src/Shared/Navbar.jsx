// src/components/Navbar.jsx
import { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';

const AppNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container fluid className="px-4 px-lg-5">
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2 fw-bold fs-2" style={{ color: '#0b4e23' }}>
          <svg className="bi" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>Library Social</span>
        </Navbar.Brand>

        {/* Mobile Toggler */}
        <Navbar.Toggle aria-controls="navbarContent" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarContent">
          {/* Search Form - grows to fill space on lg+ */}
          <Form onSubmit={handleSearch} className="mx-lg-3 my-2 my-lg-0 flex-grow-1" style={{ maxWidth: '400px' }}>
            <div className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-pill ps-5"
              />
              <svg className="position-absolute top-50 start-0 translate-middle-y ms-3" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'translateY(-50%)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </Form>

          {/* Navigation Links (Left side of the toggled area) */}
          <Nav className="mx-auto mb-2 mb-lg-0 gap-3">
            <Nav.Link href="/" className="d-flex flex-column align-items-center text-dark px-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="small">Home</span>
            </Nav.Link>
            <Nav.Link href="/explore" className="d-flex flex-column align-items-center text-dark px-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="small">Explore</span>
            </Nav.Link>
            <Nav.Link href="/library" className="d-flex flex-column align-items-center text-dark px-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="small">Library</span>
            </Nav.Link>
            <Nav.Link href="/events" className="d-flex flex-column align-items-center text-dark px-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="small">Events</span>
            </Nav.Link>
            <Nav.Link href="/groups" className="d-flex flex-column align-items-center text-dark px-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="small">Groups</span>
            </Nav.Link>
          </Nav>

          {/* Right side Icons + User */}
          <div className="d-flex align-items-center gap-3 ms-lg-3">
            {/* Bell Icon with badge */}
            <button className="btn btn-link text-dark p-0 position-relative" style={{ textDecoration: 'none' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem', marginTop: '-0.2rem' }}>3</span>
            </button>

            {/* Settings Icon */}
            <button className="btn btn-link text-dark p-0">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* User name + Avatar */}
            <div className="d-flex align-items-center gap-2">
              <span className="fw-medium text-dark">Alex Morgan</span>
              <img
                src="https://ui-avatars.com/api/?name=Alex+Morgan&background=6366f1&color=fff&rounded=true&bold=true"
                alt="Profile"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;