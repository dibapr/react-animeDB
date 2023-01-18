import { Image, Box, Text } from "@chakra-ui/react";
import kanna from "../assets/kanna.png";

const Kanna = () => {
  return (
    <Box marginTop="10">
      <Image src={kanna} boxSize="sm" objectFit="cover" marginBottom="10" />
      <Text fontSize="3xl">Try to fetch some anime...</Text>
    </Box>
  );
};

export default Kanna;
