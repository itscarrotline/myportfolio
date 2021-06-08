import React from 'react';
import Emoji from './EmojiComponent'
import '../about.css'

function About() {
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col py-5">
          <img
            className="rounded Aboutimg"
            src="../assets/img/about.jpg"
            width="400"
            alt="Caroline standing in a garden."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto text-left">
          <h3 className="p-1">
            <Emoji label="peace hand" symbol="✌" />
             Hi, I'm Caroline! <br/>
             I'd love to chat with you about...
          </h3>
          <ul>
            <li>
              <h3>
                <Emoji label="red book" symbol="📕" />
                History
              </h3>
              <p className="offset-1">
                I've always been interested in random historical facts! Did you
                know that in the 19th century, aresnic was a popular dye used to
                make emerald green. This would make the wearer break out in
                ulcers. One could even say that these garments made a{" "}
                <i>killer outfit</i>. ;)
              </p>
            </li>
            <li>
              <h3>
                <Emoji label="music note" symbol="🎵" />
                Music
              </h3>
              <p className="offset-1">
                I listen to all kinds of music from pop to country. I like
                checking out new artists! Send me a rec!
              </p>
            </li>
            <li>
              <h3>
                <Emoji label="newspaper" symbol="📰" />
                Current Events
              </h3>
              <p className="offset-1">
                A lot of my inspiration for my designs spring from keeping up
                with current events and its nuances in society.
              </p>
            </li>
            <li>
              <h3>
                <Emoji label="television" symbol="📺" />
                TV Shows
              </h3>
              <p className="offset-1">
                I've binged so many shows to even count. My current favs are "Pose", "On
                My Block" and, "Amphibia".
              </p>
            </li>
            <li>
              <h3>
                <Emoji label="television" symbol=" 🍮" />
                Food
              </h3>
              <p className="offset-1">
                I like to both make and eat food. My travel plans often revolve
                around trying new foods. One day, I hope to try cuisines from
                all around the world.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-2 text-left">
          <ul>
            <li>
              <a href="https://www.google.com">Resume</a>
            </li>
            <li>
              <a href="https://www.gmail.com">Email </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
