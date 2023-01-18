import Buttons from "../UI/Buttons";

const FetchButtonWrapper = (props) => {
  return (
    <div>
      <Buttons
        showTopAnime={props.showTopAnime}
        showSeasonAnime={props.showSeasonAnime}
      />
    </div>
  );
};

export default FetchButtonWrapper;
