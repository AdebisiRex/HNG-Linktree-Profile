import React from "react";
import "./App.css";
import face from "./resources/face-card.png";
import slack from "./resources/image.png"
import github from "./resources/github.png"
import vector from "./resources/Vector.png"
import ing from "./resources/I4G.png"
import footer from "./resources/Footer text.png"
const App = () => {
  return (
    <>
      <div className="whole">
        <div className="view">
          <img alt="" src={face} width={200} id="profile_img" />{" "}
          <p id="twitter">twitter link: @rex_rachid</p>
          <p id="slack">AdebisiRex</p>
          <hr />
          <div className="anchor">
            <a href="https://training.zuri.team/" id="btn_zuri">
              Zuri Team
            </a>
            <a href="https://books.zuri.team/" id="books">
              Zuri Books
            </a>
            <div>
              <a title="This is a the easiest approach you'll find to learning Python
                Programing on the market"
                href="https://books.zuri.team/python-for-beginners?ref_id=AdebisiRex"
                id="btn_zuri"
              >
                Python Books
              </a>
              <div className="subtext">
                This is a the easiest approach you'll find to learning Python
                Programing on the market
              </div>
            </div>
            <div>
              <a title="We offer an exclusive clearance to all our verified coders who
                have passed through extensive check-ups by our dexterous team,
                get yours?" href="https://background.zuri.team/" id="pitch">
                background check for coders
              </a>
              <div className="subtext">
                {" "}
                We offer an exclusive clearance to all our verified coders who
                have passed through extensive check-ups by our dexterous team,
                get yours?{" "}
              </div>
            </div>
            <div>
              <a title="Zuri is a team of verified proffesionals and we have this
                perfectly curate book for learning designs to ease your path" href="https://books.zuri.team/design-rules" id="bood_design">
                Design Books 
              </a>
              <div className="subtext">
                Zuri is a team of verified proffesionals and we have this
                perfectly curate book for learning designs to ease your path
              </div>

            </div>
          </div>

          <section>
            <a href="https://slack.com/AdebisiRex"><img src={slack} alt="" width={35} /></a>
            <a href="https://github.com/AdebisiRex/HNG-Linktree-Profile.git"><img src={github} alt="" width={35} /></a>
          </section>

        </div>
          <footer>
            <img src={vector} alt="" />
            <img src={footer} alt="" />
            <img src={ing} alt="" />

         
          </footer>
      </div>
    </>
  );
};

export default App;
