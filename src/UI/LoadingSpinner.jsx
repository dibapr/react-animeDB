import { Spinner, Image } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <>
      <h1>Loading Data...</h1>
      <Spinner color="red.500" />
      <Image
        boxSize="300px"
        src="https://media.tenor.com/V_0ti1a3_GoAAAAM/loading-azurlane.gif"
      />
    </>
  );
};

export default LoadingSpinner;
