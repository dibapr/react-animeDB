import { Text, Spinner, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MainContent from "./components/MainContent";
import FetchButtonWrapper from "./components/FetchButtonWrapper";
import Kanna from "./UI/Kanna";
import LoadingSpinner from "./UI/LoadingSpinner";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [getAPI, setGetAPI] = useState("");
  const [check, setCheck] = useState(false);

  const showTopAnimeHandler = () => {
    setLoaded(true);
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        console.log(response.data.data);
        setAnimeData(response.data.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
    setEmpty(false);
  };

  const showSeasonAnimeHandler = () => {
    setLoaded(true);
    axios
      .get("https://api.jikan.moe/v4/seasons/now")
      .then((response) => {
        console.log(response.data.data);
        setAnimeData(response.data.data);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
    setEmpty(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 800);
  }, [animeData]);

  return (
    <div className="App">
      <Flex
        justifyContent="flex-end"
        align="center"
        flexDirection="column"
        gap="5">
        <Text as="b" fontSize="4xl">
          Welcome to AnimeDB
        </Text>
        <FetchButtonWrapper
          showTopAnime={showTopAnimeHandler}
          showSeasonAnime={showSeasonAnimeHandler}
        />
        {empty && <Kanna />}
        {loaded ? <LoadingSpinner /> : <MainContent animes={animeData} />}
      </Flex>
    </div>
  );
}

export default App;
