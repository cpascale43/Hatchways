import React from "react";
import AddIcon from "@material-ui/icons/Add";
import '../Button.css'

const ExpandIcon = ({ setExpandView, expandView }) => {
  return (
      <AddIcon
        className="expand-btn"
        onClick={() => {
          setExpandView(!expandView);
        }}
        fontSize="large"
      />
  );
};

export default ExpandIcon;
