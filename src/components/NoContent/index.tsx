import { H1STyled } from "./styles";

interface Props {
  phrase: string;
}
export const NoAnnouncement = ({ phrase }: Props) => {
  return (
    <div>
      <H1STyled>
        {phrase} 
      </H1STyled>
    </div>
  );
};
