import { Link } from "react-router-dom";

const Card = ({ cardData: card }) => {
    console.log("card", card)
  return (
    <>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="card">
            <img src={card.thumbnail} className="card-img-top" alt={card.alt} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.intro}</p>
              <p className="card-text">{card.introTech}</p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={card.target}
                data-bs-name={card.dataName}
                id="portfolioBtn"
              >
                View More
              </button>
              {/* modal goes here */}
              <div
                className="modal fade"
                id={card.id}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        {card.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        id="modalBtn"
                        aria-label="Close"
                        ><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                      <p>{card.description}</p>
                      <h6>Functionality</h6>
                      <ul>
                        {card.functionality.map((x) => (
                          <li>{x}</li>
                        ))}
                      </ul>
                      {card.myContributions && (
                        <>
                          <h6>My Contributions</h6>
                          <ul>
                            {card.myContributions.map((x) => (
                              <li>{x}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <h6>Technology</h6>
                      <ul style={{ listStyleType: "none" }}>
                        {card.technology.map((x) => (
                          <li>{x}</li>
                        ))}
                      </ul>
                      {card.testing && (
                        <>
                          <h6>Testing</h6>
                          <ul>
                            {card.testing.map((x) => (
                              <li>{x}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      <h6>
                        <Link
                          to={card.github}
                          target="_blank"
                          rel="noreferrer"
                          title="Go to profile"
                          className="cardLink"
                        >
                          <i className="fab fa-github cardLink"></i>
                          Github Repository
                        </Link>
                      </h6>
                      <h6>
                        <Link
                          to={card.url}
                          target="_blank"
                          rel="noreferrer"
                          title="Go to profile"
                          className="cardLink"
                        >
                          <i className="fas fa-eye cardLink"></i>
                          Visit Project
                        </Link>
                      </h6>
                      <br />
                      {card.screenshots.map((x) => (
                        <img
                          src={x}
                          className="mw-100"
                          alt="project screenshot"
                        />
                      ))}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          id="portfolioBtn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
