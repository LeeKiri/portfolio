import { ExternalLink } from 'react-external-link';

const InfoSection = () => {
  return (
    <>
      <section id="homepage">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <h3 id="bannerTitle" className="text-left">
              Full Stack Web Developer
            </h3>
            <p id="mainBannerP" className="text-left">
              Hi, I'm Lee. I'm a  Full Stack Web Developer with a  Certificate
              from Monash University and a  background in Education. Expertise in
              communication, leadership and time management. I’m inspired by
              Software Development as it fuels my love of learning.
            </p>

            <p id="mainBannerP" className="text-left">
              I enjoy sharing knowledge and contributing to challenging projects
              in agile environments. I recently incorporated user authentication
              on a  members page using bcrypt and passport npm packages. My drive
              and resilience motivates me to persevere and create solutions.
            </p>

            <p id="mainBannerP" className="text-left">
              I build software using responsive design, clean code, creativity
              and effective communication. I’m excited to join an innovative
              company to offer my skills and develop them further.
            </p>
            <br />
            <p id="quoteP" className="left">
              “Once you stop learning you start dying”
            </p>
            <p Id="referenceP" className="text-left">
              Albert Einstein
            </p>
          </div>

          {/* <!-- contact details --> */}
          <div className="col-md-12 col-lg-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/resize/head1.jpg`}
              id="imgHeadshot"
              alt="headshot"
            />
            <aside id="list">
              <div id="contactList" className="vl">
                <h5>
                  <a 
                    href="https://github.com/LeeKiri"
                    target="_blank"
                    rel="noreferrer"
                    title="Go to profile"
                  >
                    <i className="fab fa-github"></i> GitHub Profile
                  </a >
                </h5>
                <h5>
                  <ExternalLink
                    href="https://linkedin.com/in/lee-k-templeton"
                    target="_blank"
                    rel="noreferrer"
                    title="Go to profile">
                    <i className="fab fa-linkedin"></i> Linkedin
                    </ExternalLink>
                </h5>
                <h5>
                  <a 
                    href={`${process.env.PUBLIC_URL}/assets/LeeTempleton-Go.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    title="Go to profile"
                  >
                    <i className="fas fa-file"></i> Resume
                  </a >
                </h5>
                <h5>
                  <a 
                    href="portfolio.html"
                    target="_blank"
                    rel="noreferrer"
                    title="Go to profile"
                  >
                    <i className="fas fa-code-branch"></i> Projects
                  </a >
                </h5>

                <h5>
                  <i className="fas fa-envelope"></i>
                  <a  href="mailto:leekiritempleton@gmail.com">
                    leekiritempleton@gmail.com
                  </a >
                </h5>
                <h5>
                  <i className="fas fa-phone-square-alt"></i>
                  <a  href="tel:+61423201885"> +61 423201885</a >
                </h5>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
