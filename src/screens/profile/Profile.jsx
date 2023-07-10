import React from "react";
// import { Link } from "react-router-dom";
import { SocialLink, TagLg as Tag } from "../../components";
import "./profile.css";

function Profile() {
  return (
    <main class="profile my-md">
      <div class="container">
        <div class="layout">
          <div class="column column--1of3">
            <div class="card text-center">
              <div class="card__body dev">
                <img class="avatar avatar--xl" src="images/dennis.jpg" alt="" />
                <h2 class="dev__name">Dennis Ivanov</h2>
                <p class="dev__title">
                  Expirance FullStack Developer, Youtuber and Instructor
                </p>
                <p class="dev__location">Based in Florida, USA</p>
                <ul class="dev__social">
                  <SocialLink />
                  <SocialLink />
                  <SocialLink />
                  <SocialLink />
                </ul>
                <a href="/" class="btn btn--sub btn--lg">
                  Send Message{" "}
                </a>
              </div>
            </div>
          </div>
          <div class="column column--2of3">
            <div class="devInfo">
              <h3 class="devInfo__title">About Me</h3>
              <p class="devInfo__about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                illum ipsum iusto consequatur. Totam, dolorum fugiat, debitis
                facere illo nostrum nesciunt maxime, deserunt enim voluptatibus
                modi natus velit voluptatum. Dicta eritatis exercitationem ut
                quos a placeat obcaecati? Architecto illum!
                <br />
                Amet consectetur adipisicing elit. Veritatis exercitationem ut
                quos a placeat obcaecati? Architecto illum, atque delectus nemo
                dolorem inventore ab facilis? Dolor placeat vel delectus ipsam
                ullam.
              </p>
            </div>
            <div class="devInfo">
              <h3 class="devInfo__title">Skills</h3>
              <div class="devInfo__skills">
                <div class="devSkill">
                  <h4 class="devSkill__title">JavaScript</h4>
                  <p class="devSkill__info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae neque voluptatum ut? Quaerat, ea cumque! Dolorum
                    provident esse molestias commodi odit sapiente quod quasi
                    corrupti obcaecati? Nobis ex temporibus quaerat!
                  </p>
                </div>
                <div class="devSkill">
                  <h4 class="devSkill__title">React</h4>
                  <p class="devSkill__info">
                    Smet consectetur adipisicing elit. Omnis, nihil? Accusamus
                    aspernatur aut debitis vitae quaerat nihil fugiat,
                    doloremque nesciunt alias pariatur maxime unde, nam saepe
                    laborum at odit labore.
                  </p>
                </div>
                <div class="devSkill">
                  <h4 class="devSkill__title">Express(Nodejs)</h4>
                  <p class="devSkill__info">
                    Auae error deleniti aperiam enim nisi nesciunt, ratione
                    eveniet eos fuga ad recusandae mollitia! Facere earum,
                    distinctio nihil recusandae ipsum nesciunt. Possimus, ex.
                    Officia maxime nihil inventore cum tenetur! Veritatis
                    sapiente libero ducimus nesciunt itaque, placeat inventore
                    sint blanditiis?
                  </p>
                </div>

                <h3 class="devInfo__subtitle">Other Skills</h3>
                <div class="devInfo__otherSkills">
                  <Tag tagName={"Figma"} />
                  <Tag tagName={"Vuejs"} />
                  <Tag tagName={"REST API"} />
                  <Tag tagName={"GraphQL"} />
                  <Tag tagName={"TypeScript"} />
                  <Tag tagName={"Webpack"} />
                  <Tag tagName={"NextJS"} />
                  <Tag tagName={"Postgres"} />
                  <Tag tagName={"MongoDB"} />
                </div>
              </div>
            </div>
            <div class="devInfo">
              <h3 class="devInfo__title">Projects</h3>
              <div class="grid grid--two">
                <div class="column">
                  <div class="card project">
                    <a href="single-project.html" class="project">
                      <img
                        class="project__thumbnail"
                        src="../../images/project-b.png"
                        alt="project thumbnail"
                      />
                      <div class="card__body">
                        <h3 class="project__title">DevSearch UI Design</h3>
                        <p>
                          <a class="project__author" href="profile.html">
                            By Shahriar P. Shuvo
                          </a>
                        </p>
                        <p class="project--rating">
                          <span style={{ fontWeight: "bold" }}>92%</span>{" "}
                          Postitive Feedback (62 Votes)
                        </p>
                        <div class="project__tags">
                          <span class="tag tag--pill tag--main">
                            <small>NextJS</small>
                          </span>
                          <span class="tag tag--pill tag--main">
                            <small>GraphQL</small>
                          </span>
                          <span class="tag tag--pill tag--main">
                            <small>TypeScript</small>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
