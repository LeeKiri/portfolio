const IconCollaborate = () => {
  return (
    <>
      <h6 class="techTitle">Technology I've Used To Collaborate</h6>
      <div class="col">
        <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logos/figma2.png`} alt="figma logo" />
        <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logos/jira.png`} alt="trello logo" />
        <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logos/trelloT.png`} alt="trello logo" />
        <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logos/agile.PNG`} alt="agile logo" />
        <img class="logo" src={`${process.env.PUBLIC_URL}/assets/logos/slack.png`} alt="slack logo" />
      </div>
    </>
  );
};

export default IconCollaborate;
