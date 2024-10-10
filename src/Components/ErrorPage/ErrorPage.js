import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>{error.data}</h1>
      <h2>{error.statusText + ":" + error.status}</h2>
    </>
  );
};

export default ErrorPage;
