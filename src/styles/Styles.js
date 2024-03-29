import styled, { css } from "styled-components";
import { MoreOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

export const $Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const $Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  margin: 32px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const $Card = styled.div`
  border: 1px solid #d2d7df;
  border-radius: 5px;
  margin-bottom: 32px;
`;

export const $Thumbnail = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
`;

export const $CardBody = styled.div`
  padding: 24px 16px;
`;

export const $Heading = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #2a2941;
  font-weight: 400;
  }`;

export const $TruncatedHeading = styled($Heading)`
  width: "100%";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const $Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #2a2941;
  margin-top: ${(props) => (props.marginTopSmall ? "16px" : 0)};
`;

export const $MediumText = styled($Text)`
  font-size: 16px;
  line-height: 24px;
`;

export const $JustifyContent = (props) => css`
  display: flex;
  justify-content: ${props.justify};
  padding: 16px;
  align-items: center;
`;

export const $CardFooter = styled.div`
  ${$JustifyContent};
`;

export const $FavouriteOutlineIcon = styled(StarOutlined)`
  font-size: 14px;
  color: #2a2941;

  & :hover {
    cursor: pointer;
  }
`;

export const $FavouriteFilledIcon = $FavouriteOutlineIcon.withComponent(
  StarFilled
);

export const $MoreOutlinedIcon = styled(MoreOutlined)`
  font-size: 14px;
  color: ${(props) => (props.active ? "#ffffff" : "#2a2941")};
`;

export const $Trigger = (props) => css`
  border-radius: 2px;
  padding: 4px 5px;
  border: 1px solid ${props.border};
  background-color: ${props.background};

  ${(props) => {
    if (props.nopadding) {
      return `
      padding: 0px;
      `;
    }
  }}

  & :hover {
    cursor: pointer;
  }
`;

export const $IconWrapper = styled.span`
  ${$Trigger};
`;

export const $Menu = styled.span`
  border: 1px solid #d2d7df;
  border-radius: 2px;
  width: 110px;
  margin-left: 154px;
  margin-top: -8px;
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  transition-duration: all 1s ease;

  > a {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
    color: #2a2941;
    text-decoration: none;
  }

  & a:hover {
    background-color: #1254ff;
    color: #ffffff;
  }
`;
