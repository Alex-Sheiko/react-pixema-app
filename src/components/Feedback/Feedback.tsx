import { Title } from "components";
import { StyledFeedback, Image } from "./styles";

interface FeedbackProps {
  text: string;
}

export const Feedback = ({ text }: FeedbackProps) => {
  return (
    <StyledFeedback>
      <Image />
      <Title option={"H3"} text={text} />
    </StyledFeedback>
  );
};
