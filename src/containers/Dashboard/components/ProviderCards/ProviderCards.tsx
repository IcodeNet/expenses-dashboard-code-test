import React, { FC } from "react";
import { FlexContainer } from "../../../../styles";
import { Card, CardHeading, CardSubheading } from "../../../../components";
import { ProviderBalance, ProviderInfo, ProviderTitleLower } from "../../../../api/types/transactions";
import { formatCurrency } from "../../../../utilities";
import { PROVIDER_LOGOS } from "../../../../constants/providerLogos";

interface ProviderCards {
  balance?: ProviderBalance;
  isLoading: boolean;
  provider?: ProviderInfo
}

export const ProviderCards: FC<ProviderCards> = ({ provider, balance }) => {
  const { 
    amount: balanceAmount,
    currency_iso: balanceCurrency
  } = balance || {};
  const balanceFormatted = 
    !!balanceAmount && 
    !!balanceCurrency && 
    formatCurrency(balanceAmount, balanceCurrency);

  const providerTitle = provider?.title.toLowerCase() as ProviderTitleLower || "";
  const providerLogo = providerTitle && PROVIDER_LOGOS[providerTitle];

  return (
    <FlexContainer gap="1rem" wrap="wrap">
      <Card icon={providerLogo}>
        <CardHeading as="span">{provider?.sort_code} | {provider?.account_number}</CardHeading>
        <CardSubheading as="h3">Sort Code | Account Number</CardSubheading>
      </Card>

      <Card>
        <CardHeading as="span">{balanceFormatted}</CardHeading>
        <CardSubheading as="h3">Current Balance</CardSubheading>
      </Card>
    </FlexContainer>
  );
}