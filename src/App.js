import React from "react";
import "./App.css";
import face from "./resources/face-card.png";
const App = () => {
  return (
    <>
      <div className="whole">
        <div className="view">
          <img alt="" src={face} width={200} id="profile_img" />{" "}
          <p id="twitter">@rex_rachid</p>
          <p id="slack">AdebisiRex</p>
          <hr />
          <div className="anchor">
            <a href="https://training.zuri.team/" id="btn_zuri">
              Training
            </a>
            <a href="https://books.zuri.team/" id="books">
              Books
            </a>
            <div>
              <a
                href="https://books.zuri.team/python-for-beginners?ref_id=AdebisiRex"
                id="btn_zuri"
              >
                BuyPython
              </a>
              <div>
                This is a the easiest approach you'll find to learning Python
                Programing on the market
              </div>
            </div>
            <div>
              <a href="https://background.zuri.team/" id="pitch">
                Pitch
              </a>
              <div>
                {" "}
                We offer an exclusive clearance to all our verified coders who
                have passed through extensive check-ups by our dexterous team,
                get yours?{" "}
              </div>
            </div>
            <div>
              <a href="https://books.zuri.team/design-rules" id="bood_design">
                Zuri Design
              </a>
              <div>
                Zuri is a team of verified proffesionals and we have this
                perfectly curate book for learning designs to ease your path
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
