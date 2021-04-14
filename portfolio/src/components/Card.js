import { cards } from "../../utils/db";

const Card = (props) => {

    const handleOnClick = (target) => {

    }

  return (

    <>
    {cards.map((card)=> (
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="card" >
          <img
            src={card.thumnail}
            className="card-img-top"
            alt={card.alt}
          />
          <div className="card-body">
            <h5 className="card-title">
              {card.title}
            </h5>
            <p className="card-text">
             {card.intro}
            </p>
            <p className="card-text">
             {card.introTech}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={card.target}
              data-bs-name={card.dataName}
              id="portfolioBtn"
              onClick={() => handleOnClick(card.target)}
            >
              View More
            </button>
{/* modal goes here */}
            <div class="modal fade" id="modalWellme" data-bs-backdrop="static" data-bs-keyboard="false"
                                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Well<i class="fas fa-heart"></i>Me App</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                id="portfolioBtn" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>{card.description}
                                            </p>
                                            <h6>Usage</h6>
                                            <ul>
                                               {/* map */}
                                            </ul>
                                            <h6>My Contributions</h6>
                                            <ul>
                                               {/* map */}
                                            </ul>
                                            <h6>Functionality</h6>
                                            <ul style="list-style-type:none;">
                                              {/* map */}
                                            </ul>
                                            <h6>Testing</h6>
                                            <ul>
                                                {/* map */}
                                            </ul>
                                            <h6><a href={card.github} target="_blank"
                                                    title="Go to profile" id="modalLink"><i class="fab fa-github"></i>
                                                    Github
                                                    Repository</a></h6>
                                            <h6><a href={card.url} target="_blank"
                                                    title="Go to profile" id="modalLink"><i class="fas fa-eye"></i>
                                                    Visit
                                                    Project</a></h6>
                                            <br>
                                           {/* map images */}
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" id="portfolioBtn"
                                                    data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
          </div>
        </div>
      </div>
          ))}

    </>

  );
};

export default Card;
