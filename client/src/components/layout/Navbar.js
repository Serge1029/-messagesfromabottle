import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav
      activeKey='/'
      onSelect={selectedKey => console.log(`selected ${selectedKey}`)}
      className='justify-content-between navigation navbar navbar-expand-md'
      style={{
        backgroundColor: "rgb(79, 73, 137)",
        marginBottom: 0,
        zIndex: 9,
      }}>
      <Nav.Item>
        <Nav.Link
          className='navbar-brand nav-link'
          href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
          target='_blank'>
          <img
            src='assets/cropped-MFAB-final-art-cover.jpg'
            width='40'
            height='40'
            className='d-inline-block align-top logo'
            alt='logo'
          />
        </Nav.Link>
      </Nav.Item>

      <div className='nav-menu'>
        <Nav.Item className='nav-item'>
          <Nav.Link className='nav-link' eventKey='/' href='/'>
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className='nav-link'
            eventKey='/allpodcasts'
            href='/allpodcasts'>
            Podcast Episodes
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className='nav-link' eventKey='/hosts' href='/hosts'>
            Meet Your Hosts
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className='nav-link' eventKey='/message' href='/message'>
            Share Your Message
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-link' eventKey='/contact' href='/contact'>
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </div>
      <NavDropdown title='Menu' id='nav-dropdown'>
        <NavDropdown.Item href='/home'>Home</NavDropdown.Item>
        <NavDropdown.Item href='/podcast'>Podcast Episodes</NavDropdown.Item>
        <NavDropdown.Item href='/hosts'>Meet Your Hosts</NavDropdown.Item>
        <NavDropdown.Item href='/message'>Share Your Message</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='/contact'>Contact Us</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item id='subscribe' className='nav-item'>
        <Nav.Link
          href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
          target='_blank'
          className='btn btn-info nav-link'>
          Subscribe
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default NavBar;
