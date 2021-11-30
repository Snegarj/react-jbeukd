import React from 'react';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Main from "./main.js";
import TextField from '@mui/material/TextField';

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
function FileUpload( {status}) {
  // State to store uploaded file
  const [file, setFile] = React.useState('');
  const [active,setActive]=React.useState(false)


  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    // Add code here to upload file to server
    // ...
  }
  function logout(){



 if(active){
   setActive(false);

 }
 else{
   setActive(true);

      
 }
 

     
  
  
  }

  return (
    <div className="Profile">
      

   
      <header className="App-header">
        <div className="Login">
          <h2> Profile </h2>
          <div id="upload-box">
            {file && <ImageThumb image={file} />}
            <input type="file" onChange={handleUpload} M/>
          </div>
          <TextField
            className="TextField"
            id="outlined-search"
            label="Name"
            type="search"
          />
          <TextField
            className="TextField"
            id="outlined-search"
            label="Date Of Birth"
            type="search"
          />
          <TextField
            className="TextField"
            id="outlined-search"
            label="Religious"
            type="search"
          />

          <TextField
            className="TextField"
            id="outlined-search"
            label="Height"
            type="search"
          />

          <div className="Button">
            <Button
              variant="contained"
              color="primary"
             onClick={logout}
            >
              Log Out
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} id="image" />;
};

export default function Profile( {status}) {
  return <FileUpload status={status} />;
}
