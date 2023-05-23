import { Logo, Title } from "components";
import { ROUTE } from "router";
import { Body, ImageError, StyledErrorPage, StyledNavLink, Text } from "./styles";

export const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <Logo />
      <Body>
        <div>
          <ImageError />
          <Title option="H1" text="Lost your way?" />
          <Text>
            Sorry, we can't find that page. You'll find loads to explore on the home page.
          </Text>
          <StyledNavLink to={ROUTE.HOME}>Pixema Home</StyledNavLink>
        </div>
      </Body>
    </StyledErrorPage>
  );
};
