import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";

import "../Button.css";

const HideIcon = ({ setShowGrades, showGrades }) => {
  return (
      <RemoveIcon
        className="expand-btn"
        onClick={() => {
          setShowGrades(!showGrades);
        }}
        fontSize="large"
      />
  );
};

export default HideIcon;
