import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  VStack,
  Heading,
  Text,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const AnimeCard = (props) => {
  return (
    <Card maxW="xl" h="700px">
      <CardBody>
        <Center>
          <Image src={props.image} alt="" borderRadius="lg" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="sm">{props.title}</Heading>
        </Stack>
        <Divider mt="5" />
        <CardFooter
          justify="center"
          flexDirection="column"
          alignItems="center"
          gap="2">
          <VStack>
            <Text>Episode: {props.episode}</Text>
            <Text>Type: {props.type}</Text>
            <Text>Aired: {props.aired}</Text>
          </VStack>
          <Text
            display="flex"
            alignItems="center"
            as="b"
            gap="2"
            color="yellow.400"
            fontSize="xl">
            <StarIcon />
            {props.score}
          </Text>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
