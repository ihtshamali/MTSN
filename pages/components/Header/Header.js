import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import logo from '../../../public/logo.png'
import Link from 'next/link';

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Link href='/' className='navbar-brand'>
        <Image src={logo}
            alt="MTSN"
            width={150}
            height={35} />
        </Link>
        {/* <Navbar.Brand href="/">
          
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul className='tex-light inline-list'>
              <li className='ps-5'>
                <Link className='text-decoration-none' href="/cloud-membership">Cloud Membership</Link>
              </li>
              <li className='ps-5'>
              <Link className='text-decoration-none' href="/web3">Web3</Link>
              </li>
              <li className='ps-5'>
              <Link className='text-decoration-none' href="/why-mtsn">Why MTSN</Link>
              </li>
              <li className='ps-5'>
              <Link className='text-decoration-none' href="/case-studies">Case Studies</Link>
              </li>
              <li className='ps-5'>
              <Link className='text-decoration-none' href="/services">Services</Link>
              </li>
            </ul>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;