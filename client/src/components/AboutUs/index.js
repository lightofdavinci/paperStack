import React, { Component } from "react";
import Navigation from "../Navigation";
import Teresa from './teresa.jpg';
import Jason from './jason.jpg';
import Ronald from './ronald.jpg';
import Dan from './dan.jpg';

import { Jumbotron, Button } from 'reactstrap';
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <Navigation />
        <Jumbotron>
          <div className="About-wrapper">
            <img className="About-pic" src={Jason} alt="200x200px"/>
            <div className="About-info">
              <h1 className="display-4">Jason Nuhn</h1>
              <p className="lead">A results-driven, customer-focused, articulate and analytical Software Engineer who can think “out of the box.” Strong in design and integration problem-solving skills.</p>
              <hr className="my-3" />
              <p>PRIMARY SKILLS: JavaScript, ReactJS, MongoDB, and Express.</p>
              <p className="lead">
                <Button outline color="info" href="https://www.linkedin.com/in/jasonnuhn" target="_blank">About Jason</Button>
              </p>
            </div>
          </div>
        </Jumbotron>
        <Jumbotron>
          <div className="About-wrapper">
            <img className="About-pic" src={Teresa} alt="200x200px"/>
            <div className="About-info">
              <h1 className="display-4">Teresa Strout</h1>
              <p className="lead">A results-driven, customer-focused, articulate and analytical Software Engineer who can think “out of the box.” Strong in design and integration problem-solving skills.</p>
              <hr className="my-3" />
              <p>PRIMARY SKILLS: JavaScript, ReactJS, MongoDB, and Express.</p>
              <p className="lead">
                <Button outline color="info" href="https://www.linkedin.com/in/teresa-strout-23193713" target="_blank">About Teresa</Button>
              </p>
            </div>
          </div>
        </Jumbotron>
        <Jumbotron>
          <div className="About-wrapper">
            <img className="About-pic" src={Ronald} alt="200x200px"/>
            <div className="About-info">
              <h1 className="display-4">Ronald Cho</h1>
              <p className="lead">A results-driven, customer-focused, articulate and analytical Software Engineer who can think “out of the box.” Strong in design and integration problem-solving skills.</p>
              <hr className="my-3" />
              <p>PRIMARY SKILLS: JavaScript, React/Redux, Nodejs, Express, MongoDB, Python, Django.</p>
              <p className="lead">
                <Button outline color="info" href="https://www.linkedin.com/in/jasonnuhn" target="_blank">About Ronald</Button>
              </p>
            </div>
          </div>
        </Jumbotron>
        <Jumbotron>
          <div className="About-wrapper">
            <img className="About-pic" src={Dan} alt="200x200px"/>
            <div className="About-info">
              <h1 className="display-4">Dan Volosnikov</h1>
              <p className="lead">Passionate about all things tech and software development; experienced builder of full-stack web applications projects development in the MERN JavaScript stack. 
I am quite flexible with respect to working hours and will be happy to use my skills to help you better reach and engage people.</p>
              <hr className="my-3" />
              <p>PRIMARY SKILLS: ReactJS, ES5-8 , MongoDB, and Express.</p>
              <p className="lead">
                <Button outline color="info" href="https://www.linkedin.com/in/dan-volosnikov-561871112" target="_blank">About Dan</Button>
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
