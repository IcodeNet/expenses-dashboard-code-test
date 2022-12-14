import React, { type FC } from "react";
import { FlexContainer } from "../../../../styles";
import { Card, CardHeading, CardSubheading } from "../../../../components";
import type { ProviderBalance, ProviderInfo, ProviderTitleLower } from "../../../../api/types/transactions";
import { formatCurrency } from "../../../../utilities";
import { PROVIDER_LOGOS } from "../../../../constants/providerLogos";
import { SkeletonCards } from "./SkeletonCards";
import { PROVIDER_CARDS_CONTENT } from "./constants";

interface ProviderCards {
  balance?: ProviderBalance;
  isLoading: boolean;
  provider?: ProviderInfo
}

const { headings: {
  accountCredentials: accCredentialsHeading,
  balance: balanceHeading
} } = PROVIDER_CARDS_CONTENT;

export const ProviderCards: FC<ProviderCards> = ({ balance, isLoading, provider }) => {
  const { 
    amount: balanceAmount,
    currency_iso: balanceCurrency
  } = balance || {};
  const showCards = !isLoading && !!provider && !!balance;

  const balanceFormatted = 
    !!balanceAmount && 
    !!balanceCurrency && 
    formatCurrency(balanceAmount, balanceCurrency);

  const providerTitle = provider?.title.toLowerCase() as ProviderTitleLower || "";
  const providerLogo = providerTitle && PROVIDER_LOGOS[providerTitle];

  return (
    <FlexContainer gap="1rem" wrap="wrap">
      {isLoading && <SkeletonCards />}

      {showCards && (
        <>
          <Card icon={providerLogo}>
            <CardHeading as="span">{provider?.sort_code} | {provider?.account_number}</CardHeading>
            <CardSubheading as="h3">{accCredentialsHeading}</CardSubheading>
          </Card>

          <Card>
            <CardHeading as="span">{balanceFormatted}</CardHeading>
            <CardSubheading as="h3">{balanceHeading}</CardSubheading>
          </Card>
        </>
      )}
    </FlexContainer>
  );
}