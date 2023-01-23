import React from "react";
import { Link } from "react-router-dom";
import gradientCard1 from "../../img/gradient-card1.webp";
import gradientCard2 from "../../img/gradient-card2.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h2 className="home-title">Welcome to Enchant AI</h2>

        <div className="home-inner">
          <Link to="/chatbot" className="home-gradient-card">
            <img src={gradientCard1} alt="" />

            <div className="home-gradient-text">
              <h4>ChatGPT</h4>
              <p>
                ChatGPT is a natural language processing (NLP) chatbot powered
                by GPT-3 model.
              </p>
            </div>
          </Link>

          <Link to="/generateImage" className="home-gradient-card">
            <img src={gradientCard2} alt="" />

            <div className="home-gradient-text">
              <h4>Dall - E</h4>
              <p>
                Dall-E is a generative model that can generate images from text
                descriptions.
              </p>
            </div>
          </Link>
        </div>

        <h2 style={{ margin: "40px 0px 30px 0px" }}>Build an application</h2>
        <div className="home-other-apps">
          <div className="home-other-app">
            <div
              className="home-other-icon"
              style={{ backgroundColor: "#10a37f" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </div>

            <div className="home-other-text">
              <h4>Text completion</h4>
              <p>Generate and edit text</p>
            </div>
          </div>

          <div className="home-other-app">
            <div
              className="home-other-icon"
              style={{ backgroundColor: "#dd5ce5" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="home-other-text">
              <h4>Code completion</h4>
              <p>Generate, edit, and explain code</p>
            </div>
          </div>

          <div className="home-other-app">
            <div
              className="home-other-icon"
              style={{ backgroundColor: "#5436da" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="home-other-text">
              <h4>Image generation</h4>
              <p>Generate and edit images</p>
            </div>
          </div>

          <div className="home-other-app">
            <div
              className="home-other-icon"
              style={{ backgroundColor: "#ef4146" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
              </svg>
            </div>

            <div className="home-other-text">
              <h4>Fine tuning</h4>
              <p>Train a model for your use case</p>
            </div>
          </div>

          <div className="home-other-app">
            <div
              className="home-other-icon"
              style={{ backgroundColor: "#f4ac36" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="home-other-text">
              <h4>Embeddings</h4>
              <p>Search, classify and compare text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
