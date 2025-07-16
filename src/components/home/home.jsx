import "./home.css";
import logo from "../../assets/images/logo.png";
import speed from "../../assets/icons/speed.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import telegram from "../../assets/icons/telegram.png";

export default function Home() {
  return (
    <>
      <main id="home" className="content active">
        <section id="left">
          <img src={logo} alt="LOGO" />
          <p>
            Our development services are the core of our velocity. We specialize
            in full-stack, custom-built web applications that are designed for
            performance,scalability,and results.From front-end finesse to
            back-end muscle,our team harnesses the most powerful tools in the
            industry—React,Next.js,Node.js,Django,Laravel,and more—to create
            seamless digital experiences.
          </p>
        </section>
        <section id="right">
          <div id="top-right">
            <div className="speed">
              <p>NEED FOR CODING</p>
              <img src={speed} alt="speed" />
            </div>
            <p className="description">
              At Synapse Velocity, we don't just build websites—we engineer
              digital powerhouses. Our mission is simple: dominate the web. With
              cutting-edge design, lightning-fast performance, and
              precision-engineered code, we don’t follow industry trends—we set
              them.
            </p>
          </div>
          <div id="bottom-right">
            <div id="bottom-right-left">
              <div className="contact">
                <p>CONTACT US</p>
                <div className="platforms">
                  <a href="https://github.com/synapseVelocity">
                    <img src={github} alt="github" />
                  </a>
                  <a href="https://www.linkedin.com/in/synapse-velocity-b67508375/">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="https://t.me/synapseVelocity">
                    <img src={telegram} alt="telegram" />
                  </a>
                </div>
              </div>
            </div>
            <div id="bottom-right-right">
              <p>Let your Business drink EZEM</p>
              <button
                className="hire-btn"
              >
                HIRE Team
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
