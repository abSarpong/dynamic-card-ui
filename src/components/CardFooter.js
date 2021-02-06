import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  StyledStarOutlinedIcon,
  StyledStarFilledIcon,
  StyledMoreOutlinedIcon,
  StyledCardFooter,
  StyledIcon,
} from "../styles/Styles";

const CardFooter = ({ favourite, menu }) => {
  const [visible, setVisibility] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  let favouriteIcon, menuItem;

  if (favourite === true) {
    favouriteIcon = (
      <StyledIcon onClick={() => setShowIcon(!showIcon)}>
        {!showIcon ? <StyledStarOutlinedIcon /> : <StyledStarFilledIcon />}
      </StyledIcon>
    );
  }

  if (menu === true) {
    menuItem = (
      <StyledIcon
        style={
          !visible
            ? {
                border: "1px solid #d2d7df",
                borderRadius: "2px",
                paddingTop: "4px",
                paddingRight: "6px",
                paddingBottom: "4px",
                paddingLeft: "6px",
              }
            : {
                border: "1px solid #aacbff",
                borderRadius: "2px",
                backgroundColor: "#1254ff",
                paddingTop: "4px",
                paddingRight: "6px",
                paddingBottom: "4px",
                paddingLeft: "6px",
              }
        }
        onClick={() => setVisibility(!visible)}
      >
        <StyledMoreOutlinedIcon
          style={
            !visible
              ? { fontSize: "14px", color: "#2a2941" }
              : { fontSize: "14px", color: "#ffffff" }
          }
        />
      </StyledIcon>
    );
  }

  return (
    <>
      <StyledCardFooter
        style={!favouriteIcon ? { justifyContent: "flex-end" } : null}
      >
        {favouriteIcon}
        {menuItem}
      </StyledCardFooter>
      {visible ? <DropdownMenu /> : null}
    </>
  );
};

export default CardFooter;
