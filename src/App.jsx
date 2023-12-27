import "./App.css";

import Background from "./assets/images/background-pattern-desktop.svg";
import BackgroundMobile from "./assets/images/background-pattern-mobile.svg";
import StarIcon from "./assets/images/icon-star.svg";
import Topic from "./component/Topic";

export default function App() {
  return (
    <main>
      <img src={Background} className="bg-img" />
      <img src={BackgroundMobile} className="bg-img-mobile" />

      <div className="container">
        <div className="card">
          <section className="hero">
            <img src={StarIcon} className="icon" />
            <h1>FAQs</h1>
          </section>

          <section>
            <Topic
              topic="What is Frontend Mentor, and how will it help me?"
              desc="Frontend Mentor offers realistic coding challenges to help developers improve their 
                    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                    all levels and ideal for portfolio building."
              divider={true}
            />
            <Topic
              topic="Is Frontend Mentor free?"
              desc="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                    option providing access to a range of projects suitable for all skill levels."
              divider={true}
            />
            <Topic
              topic="Can I use Frontend Mentor projects in my portfolio?"
              desc="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                    way to showcase your skills to potential employers!"
              divider={true}
            />
            <Topic
              topic="How can I get help if I'm stuck on a Frontend Mentor challenge?"
              desc="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                    channel where you can ask questions and seek support from other community members."
            />
          </section>
        </div>
      </div>
    </main>
  );
}
