import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
function Footer() {
  return <div className="App footer-section bg-dark">
    <h2>Footer Section</h2>
    <Stack direction="row"
      divider={<Divider orientation="vertical" />}
      spacing={2}><h3>Privacy Policy</h3><h3>Terms</h3>
    </Stack></div>
}

export default Footer;
