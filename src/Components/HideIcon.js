import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import '../Button.css'

const HideIcon = ({ setExpandView, expandView }) => {
  return (
      <RemoveIcon
        className="expand-btn"
        onClick={() => {
          setExpandView(!expandView);
        }}
        fontSize="large"
      />
  );
};

export default HideIcon;
