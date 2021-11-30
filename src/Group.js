import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Group() {
  return (
    <div id="Group">
      <div id="top">
        <span id="first">
          <span>
            <i class="fa fa-caret-down"></i>
          </span>
          Write a Post
        </span>
        <span id="second">
          <span>
            <i class="fa fa-external-link"></i>
          </span>
          Leave Group
        </span>
      </div>

      <div id="down">
        <form>
          <i class="fa fa-map-marker"></i>

          <Box
            id="box"
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-search"
              label="Enter your location"
              type="search"
              variant="standard"
            />
          </Box>
        </form>
        <p>
          <i class="fa fa-exclamation-circle"></i>
          Your location will help us serve better and extend a personalised
          experience.
        </p>

        <p
          id="rec"
          style={{ color: 'black', fontWeight: 700, fontSize: '13px' }}
        >
          <i class="fa fa-thumbs-up"></i>
          <span> RECOMMENDED GROUPS</span>
        </p>
        <div id="follow">
          <div className="follow">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <span>Leisure</span>
          </div>
          <button>Follow</button>
        </div>
        <div id="follow">
          <div className="follow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCkJ7mXowuBAhL-0G0WVnmSucJJmEXnAk023NhuB-rNUhQ8zIcXj_O7GqTzPbuZCqabk&usqp=CAU" />
            <span>Leisure</span>
          </div>
          <button>Follow</button>
        </div>
        <div id="follow">
          <div className="follow">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <span>Leisure</span>
          </div>
          <button>Follow</button>
        </div>
        <div id="follow">
          <div className="follow">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCkJ7mXowuBAhL-0G0WVnmSucJJmEXnAk023NhuB-rNUhQ8zIcXj_O7GqTzPbuZCqabk&usqp=CAU" />
            <span>Leisure</span>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}
