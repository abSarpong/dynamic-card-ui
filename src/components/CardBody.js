import React from "react";
import styled from "styled-components";

const ArticleCardBody = styled.div`
  padding: 24px 16px;
`;

const Heading = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #2a2941;
  font-weight: 400;
  }`;

const TruncatedHeading = styled(Heading)`
  width: "100%";
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #2a2941;
  margin-top: ${(props) => (props.marginTopMedium ? "24px" : 0)};
`;

const MediumText = styled(Text)`
  font-size: 16px;
  line-height: 24px;
`;

const CardBody = ({ title, description, day }) => {
  let descriptionText;

  if (description != null) {
    descriptionText = <Text marginTopMedium>{description}</Text>;
  }

  return (
    <ArticleCardBody>
      <TruncatedHeading>{title}</TruncatedHeading>
      <MediumText marginTopMedium>Last edited {day}</MediumText>
      {descriptionText}
    </ArticleCardBody>
  );
};

export default CardBody;
