import { useState } from "react";
import DropdownMenu from "./Menu";
import styled, { css } from "styled-components";
import { MoreOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

const $JustifyContent = (props) => css`
  display: flex;
  justify-content: ${props.justify};
  padding: 16px;
  align-items: center;
`;

const $CardFooter = styled.div`
  ${$JustifyContent};
`;

const $FavouriteOutlineIcon = styled(StarOutlined)`
  font-size: 14px;
  color: #2a2941;

  & :hover {
    cursor: pointer;
  }
`;

const $FavouriteFilledIcon = $FavouriteOutlineIcon.withComponent(StarFilled);

const $MoreOutlinedIcon = styled(MoreOutlined)`
  font-size: 14px;
  color: ${(props) => (props.active ? "#ffffff" : "#2a2941")};
`;

const $Trigger = (props) => css`
  border-radius: 2px;
  padding: 4px 5px;
  border: 1px solid ${props.border};
  background-color: ${props.background};

  ${(props) => {
    if (props.noPadding) {
      return `
      padding: 0px;
      `;
    }
  }}

  & :hover {
    cursor: pointer;
  }
`;

const $IconWrapper = styled.span`
  ${$Trigger};
`;

const CardFooter = ({ favourite, menu }) => {
  const [visible, setVisibility] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  let favouriteIcon, menuItem;

  /* eslint-disable */
  if (favourite) {
    favouriteIcon = (
      <span noPadding onClick={() => setShowIcon(!showIcon)}>
        {!showIcon ? <$FavouriteOutlineIcon /> : <$FavouriteFilledIcon />}
      </span>
    );
  }

  if (menu) {
    menuItem = (
      <$IconWrapper
        background={visible ? "#1254ff" : "transparent"}
        border={visible ? "#aacbff" : "#d2d7df"}
        onClick={() => setVisibility(!visible)}
      >
        {!visible ? <$MoreOutlinedIcon /> : <$MoreOutlinedIcon active />}
      </$IconWrapper>
    );
  }

  return (
    /* eslint-disable */
    <>
      <$CardFooter justify={!favourite ? "flex-end" : "space-between"}>
        {favouriteIcon}
        {menuItem}
      </$CardFooter>
      {visible ? <DropdownMenu /> : ""}
    </>
  );
};

export default CardFooter;
