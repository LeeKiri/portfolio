const IconCore = () => {
  return (
    <>
      <h6 class="techTitle">Core Skill Set</h6>
      <div class="col">
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/html2.png`}
          alt="html logo"
        />
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/css2.png`}
          alt="CSS logo"
        />
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/javascript2.png`}
          alt="JavaScript logo"
        />
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/node.png`}
          alt="node.js logo"
        />
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/react3.png`}
          alt="React logo"
        />
        <img
          class="logo"
          src={`${process.env.PUBLIC_URL}/assets/logos/git.png`}
          alt="Git logo"
        />
      </div>
    </>
  );
};

export default IconCore;
