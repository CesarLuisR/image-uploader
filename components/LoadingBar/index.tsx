import { Title } from "../Uploader/styled";
import { Bar, Container, LoadBar } from "./styled";

const LoadingBar = ({ loading }: { loading: number }) => {
  return (
    <Container>
      <Title> Uploading... </Title>
      <Bar>
        <LoadBar width={loading} />
      </Bar>
    </Container>
  );
};

export default LoadingBar;
