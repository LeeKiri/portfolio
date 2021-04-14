import "../App.css";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom" id="homeFooter">
      <div
        className="card-footer bg-secondary footer-font-style footer-position"
        id="footer"
      >
        <h6 className="text-left text-light mr-5 d-inline">
          Built with React ~ Javascript ~ Node.js ~ HTML ~ CSS ~ Bootstrap
        </h6>
        <h6 className="text-right text-light d-inline">
          &copy; Lee Templeton 2021
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
