import { Title } from "../Uploader/styled";
import { Bar, Container, Load } from "./styled";

const LoadingBar = ({ loading }: { loading: number }) => {
  return (
    <Container>
      <Title> Uploading... </Title>
      <Bar>
        <Load size={loading} />
      </Bar>
    </Container>
  );
};

export default LoadingBar;
