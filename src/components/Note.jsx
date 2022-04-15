import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIndex, setIndex] = useState([]);
  const [showCheckboxes, setCheckboxes]= useState(false);

  const menuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
  const handleChecked = (index) => {
    setIndex(prevValue =>[...prevValue, index]);
  }
  function handleCheckboxes(){
    setCheckboxes(prevValue => {
      return !prevValue;
    })
  }

  function handleEdit(){
    
  }

  return (
    <div className="note">
    
    <h1>{props.title}</h1>
    {console.log(props)}
    <div className="note-div">
      <ul>
        {props?props.content.split('\n').map((e,index) => 
          <li key={index}>
          <p style={
                  isIndex.includes(index)
                    ? { textDecoration: "line-through" }
                    : {textDecoration: "none"}
                } 
              >
            {showCheckboxes && <Checkbox name="content-checkbox" onClick={()=>{handleChecked(index)}}></Checkbox>}
            {e}
            </p>
          </li>
          ): null}
      </ul>
    </div>
      
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={menuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClick();
            handleClose();
          }}
        >
          Delete Note
        </MenuItem>
       { showCheckboxes ? 
      <MenuItem onClick={() => {handleClose(); handleCheckboxes();}}>Remove checkbox</MenuItem> : 
       <MenuItem onClick={() => {handleClose(); handleCheckboxes();}}>Add checkbox</MenuItem>}
      </Menu>
    </div>
  );
}

export default Note;
