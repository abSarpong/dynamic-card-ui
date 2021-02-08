import { useState } from "react";
import DropdownMenu from "./Menu";
import styled, { css } from "styled-components";
import "../styles/styles.css";
import { MoreOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

const JustifyContent = (props) => css`
  display: flex;
  justify-content: ${props.justify};
  padding: 16px;
  align-items: center;
`;

const ArticleCardFooter = styled.div`
  ${JustifyContent};
`;

const FavouriteOutlineIcon = styled(StarOutlined)`
  font-size: 14px;
  color: #2a2941;

  & :hover {
    cursor: pointer;
  }
`;

const FavouriteFilledIcon = FavouriteOutlineIcon.withComponent(StarFilled);

const MoreOutlinedIcon = styled(MoreOutlined)`
  font-size: 14px;
  color: ${(props) => (props.active ? "#ffffff" : "#2a2941")};
`;

const IconWrapper = styled.span`
  border-radius: 2px;
  padding: 4px 6px;

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

const CardFooter = ({ favourite, menu }) => {
  const [visible, setVisibility] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  let favouriteIcon, menuItem;

  if (favourite) {
    favouriteIcon = (
      <IconWrapper noPadding onClick={() => setShowIcon(!showIcon)}>
        {!showIcon ? <FavouriteOutlineIcon /> : <FavouriteFilledIcon />}
      </IconWrapper>
    );
  }

  if (menu) {
    menuItem = (
      <IconWrapper
        className={!visible ? "inactive-trigger" : "active-trigger"}
        onClick={() => setVisibility(!visible)}
      >
        {!visible ? <MoreOutlinedIcon /> : <MoreOutlinedIcon active />}
      </IconWrapper>
    );
  }

  return (
    <>
      <ArticleCardFooter justify={!favourite ? "flex-end" : "space-between"}>
        {favouriteIcon}
        {menuItem}
      </ArticleCardFooter>
      {visible ? <DropdownMenu /> : ""}
    </>
  );
};

export default CardFooter;
