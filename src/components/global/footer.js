import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
function Footer() {
  return <div className="App footer-section bg-dark">

    <Stack direction="row"
      divider={<Divider orientation="vertical" />}
      spacing={2}>
      <Link to="/privacy-policy"><h3>Privacy Policy</h3></Link>
      <Link to="/about"><h3>About</h3></Link>
      <Link to="/cookies"><h3>Cookies</h3></Link>
      <Link to="/feedback"><h3>Feedback</h3></Link>
      <Link to="/contact-us"><h3>Contact Us</h3></Link>
    </Stack ></div >
}

export default Footer;
