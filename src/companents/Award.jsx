import "../assets/css/awards.css";
const Award = ({ titleOfPicture, awardPicture, aboutAward }) => {
  return (
    <div className="award rounded ">
      <div className="awardsOfPic">
        <img src={awardPicture} />
      </div>
      <h1 className="text-white">{titleOfPicture}</h1>
      <p className="text-secondary">{aboutAward}</p>
    </div>
  );
};

export default Award;
