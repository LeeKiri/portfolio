import Card from "../components/Card";

const Projects = ({ cards }) => {
    // console.log("message", cards)

  return (
    <>
      <main>
        <div class="container">
          <div class="row">
          {cards.map((card) => (

            <Card cardData={card} />
          )
          )};
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
