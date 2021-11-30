import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Main from './main.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');
  const [active, setactive] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <header>
      <img src="https://atghelp.files.wordpress.com/2017/02/logo-in.png" />
      <form className="example" action="action_page.php">
        <input
          type="text"
          placeholder="Search for your favorite groups in ATG"
          name="search"
        />
        <i className="fa fa-search "></i>
      </form>

      <div className="right">
        <>
          {active ? (
            <FormControl sx={{ m: 1, minWidth: 120 }} id="FormControl">
              <Select
                className="select"
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <span>Siddharth Goyal</span>
                </MenuItem>
                <MenuItem value={10}> Goyal</MenuItem>
                <MenuItem value={20}>Siddh</MenuItem>
                <MenuItem value={30}>Kavin</MenuItem>{' '}
              </Select>
            </FormControl>
          ) : (
            <div>
              <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=99" />

              <Button onClick={handleOpen}>
                <span style={{ color: 'black' }}> Create Account !</span>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Main />
                  </Typography>
                </Box>
              </Modal>
            </div>
          )}
        </>
      </div>
    </header>
  );
}
