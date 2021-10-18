import ErrorLayout from "../../components/ErrorLayout/ErrorLayout";
import GoBack from "../../components/GoBack/GoBack";
import Main from "../../components/Main/Main";

const NotFound = () => {
  return (
    <Main>
      <GoBack loading={false} />
      <ErrorLayout />
    </Main>
  );
};

export default NotFound;
