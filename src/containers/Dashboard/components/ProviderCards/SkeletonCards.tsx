import React from 'react';
import { 
  Card,
  CardContentSkeletonWrapper,
  SkeletonRectangle
} from "../../../../components";

const cardValueSkeletonProps = {
  width: "180px",
};

const cardHeadingSkeletonProps = {
  width: "120px",
  height: "20px"
};

export const SkeletonCards = () => (
  <>
    <Card>
      <CardContentSkeletonWrapper flexDirection="row">
        <SkeletonRectangle width="48px" height="48px" />

        <CardContentSkeletonWrapper>  
          <SkeletonRectangle {...cardHeadingSkeletonProps}/>
          <SkeletonRectangle {...cardValueSkeletonProps} />
        </CardContentSkeletonWrapper>
      </CardContentSkeletonWrapper>
    </Card>

    <Card>
      <CardContentSkeletonWrapper>
        <SkeletonRectangle {...cardHeadingSkeletonProps} />
        <SkeletonRectangle {...cardValueSkeletonProps} />
      </CardContentSkeletonWrapper>
    </Card>
  </>
)