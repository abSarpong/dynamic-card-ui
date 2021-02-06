import React from "react";
import {
  StyledCardBody,
  TruncatedHeading,
  Text,
  MediumText,
} from "../styles/Styles";

const CardBody = ({ title, description, day }) => {
  let descriptionText;

  if (description != null) {
    descriptionText = <Text marginTopMedium>{description}</Text>;
  }

  return (
    <StyledCardBody>
      <TruncatedHeading>{title}</TruncatedHeading>
      <MediumText marginTopMedium>Last edited {day}</MediumText>
      {descriptionText}
    </StyledCardBody>
  );
};

export default CardBody;
