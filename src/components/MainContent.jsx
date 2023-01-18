import { Grid, GridItem, Container } from "@chakra-ui/react";
import AnimeCard from "../UI/AnimeCard";
const MainContent = (props) => {
  return (
    <Grid
      templateColumns={{
        lg: "repeat(5, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
      }}
      gap={6}>
      {props.animes.map((anime) => {
        return (
          <GridItem key={anime.mal_id} w="100%">
            <AnimeCard
              title={anime.title}
              score={anime.score}
              image={anime.images.webp.image_url}
              episode={anime.episodes}
              type={anime.type}
              aired={anime.aired.string}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default MainContent;
