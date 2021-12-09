
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Header() {

  return (
    <Wrapper>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ fontSize: "20px", fontFamily: "cursive" }}>

          <ul className="navbar-nav mr-auto ">

              <li>
                  <Link to="/" className="nav-link">Covid-Tracker</Link>
              </li>
              <li>
                  <Link to="/global" className="nav-link">Global</Link>
              </li>
              <li>
                  <Link to="/india" className="nav-link">India</Link>
              </li>
              <li>
                  <Link to="/about" className="nav-link">About Covid19</Link>
              </li>
          </ul>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Header;
