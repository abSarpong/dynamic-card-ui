import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import styled from "styled-components";

const $Card = styled.div`
  border: 1px solid #d2d7df;
  border-radius: 5px;
  margin-bottom: 32px;
`;

const $Thumbnail = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
`;

const Card = ({ article }) => {
  let image;

  if (article.thumbnail != null) {
    /* eslint-disable */
    image = <$Thumbnail src={article.thumbnail} alt="Thumbnail" />;
  }

  return (
    <div>
      <$Card>
        {image}
        <CardBody
          title={article.title}
          description={article.description}
          day={article.day}
        />
        {article.favourite || article.menu ? (
          <CardFooter favourite={article.favourite} menu={article.menu} />
        ) : null}
      </$Card>
    </div>
  );
};

export default Card;
