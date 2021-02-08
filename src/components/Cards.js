import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  margin: 32px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
`;

const Cards = ({ articles }) => {
  return (
    <Container>
      <Wrapper>
        {articles.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Cards;
