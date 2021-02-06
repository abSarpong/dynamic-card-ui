import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import { CardWrapper, StyledCard, Thumbnail } from "../styles/Styles";

const Card = ({ article }) => {
  let image;

  if (article.thumbnail != null) {
    image = <Thumbnail src={article.thumbnail} alt="Thumbnail" />;
  }

  return (
    <CardWrapper>
      <StyledCard>
        {image}
        <CardBody
          title={article.title}
          description={article.description}
          day={article.day}
        />
        {article.favourite || article.menu ? (
          <CardFooter favourite={article.favourite} menu={article.menu} />
        ) : null}
      </StyledCard>
    </CardWrapper>
  );
};

export default Card;
