import { Button } from "@chakra-ui/react";

const Buttons = (props) => {
  return (
    <>
      <Button
        onClick={props.showTopAnime}
        marginX={2}
        marginY={2}
        colorScheme="yellow">
        Top
      </Button>
      <Button
        onClick={props.showSeasonAnime}
        marginX={2}
        marginY={2}
        colorScheme="blue">
        This Season
      </Button>
    </>
  );
};

export default Buttons;
