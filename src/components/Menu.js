import styled from "styled-components";

const ArticleMenu = styled.span`
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

const Menu = () => {
  return (
    <ArticleMenu>
      <a href="/">Save</a>
      <a href="/">Edit</a>
      <a href="/">Preview</a>
    </ArticleMenu>
  );
};

export default Menu;
