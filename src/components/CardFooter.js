import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import {
  StyledStarOutlinedIcon,
  StyledStarFilledIcon,
  StyledMoreOutlinedIcon,
  StyledCardFooter,
  StyledIcon,
} from "../styles/Styles";
import "../styles/styles.css";

const CardFooter = ({ favourite, menu }) => {
  const [visible, setVisibility] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  let favouriteIcon, menuItem;

  if (favourite === true) {
    favouriteIcon = (
      <StyledIcon noPadding onClick={() => setShowIcon(!showIcon)}>
        {!showIcon ? <StyledStarOutlinedIcon /> : <StyledStarFilledIcon />}
      </StyledIcon>
    );
  }

  if (menu === true) {
    menuItem = (
      <StyledIcon
        className={!visible ? "inactive-trigger" : "active-trigger"}
        onClick={() => setVisibility(!visible)}
      >
        <StyledMoreOutlinedIcon style={visible ? { color: "#ffffff" } : null} />
      </StyledIcon>
    );
  }

  // useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     if (event.target) {
  //       setVisibility(false);
  //     }
  //   });
  // });

  return (
    <>
      <StyledCardFooter
        style={!favouriteIcon ? { justifyContent: "flex-end" } : null}
      >
        {favouriteIcon}
        {menuItem}
      </StyledCardFooter>
      {visible ? <DropdownMenu /> : ""}
    </>
  );
};

export default CardFooter;
