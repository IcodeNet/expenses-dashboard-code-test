import React from 'react';
import { 
  Card,
  CardContentSkeletonWrapper,
  SkeletonRectangle
} from "../../../../components";

const HeadingSkeleton = () => <SkeletonRectangle width="180px"/>;
const ValueSkeleton = () => <SkeletonRectangle width="120px" height="20px"/>;

export const SkeletonCards = () => (
  <>
    <Card>
      <CardContentSkeletonWrapper flexDirection="row">
        <SkeletonRectangle width="48px" height="48px" />

        <CardContentSkeletonWrapper>  
          <ValueSkeleton />
          <HeadingSkeleton />
        </CardContentSkeletonWrapper>
      </CardContentSkeletonWrapper>
    </Card>

    <Card>
      <CardContentSkeletonWrapper>
        <ValueSkeleton />
        <HeadingSkeleton />
      </CardContentSkeletonWrapper>
    </Card>
  </>
)
