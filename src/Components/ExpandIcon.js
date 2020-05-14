import React from "react";
import AddIcon from "@material-ui/icons/Add";

import "../Button.css";

const ExpandIcon = ({ setShowGrades, showGrades }) => {
  return (
      <AddIcon
        className="expand-btn"
        onClick={() => {
          setShowGrades(!showGrades);
        }}
        fontSize="large"
      />
  );
};

export default ExpandIcon;
