import React from "react";
import Card from "./Card";
import { Container, Wrapper } from "../styles/Styles";

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
