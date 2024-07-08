import React from "react";
import { Link } from "react-router-dom";
import "./";

function Navbar() {
  const olStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const homeStyles = {
    backgroundColor: "blue",
    width: "fit-content",
    color: "red",
    position: "fixed",
    top: "40px",
    right: "20px",
  };

  return (
    <nav>
      <ol style={olStyles}>
        <li style={homeStyles}>
          <Link to="/">
            <span style={{ color: "white" }}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="lesson1">Introducere în React</Link>
        </li>
        <li>
          <Link to="/lesson2">Stilizarea</Link>
        </li>
        <li>
          <Link to="/lesson3">Lesson3</Link>
        </li>
        <li>
          <Link to="/lesson4">Lesson4</Link>
        </li>
        <li>
          <Link to="/lesson5">Lesson5</Link>
        </li>
        <li>
          <Link to="/lesson6">Lesson6</Link>
        </li>
        <li>
          <Link to="/lesson7">Lesson7</Link>
        </li>
        <li>
          <Link to="/lesson8">Lesson8</Link>
        </li>
        <li>
          <Link to="/lesson9">Lesson9</Link>
        </li>
        <li>
          <Link to="/lesson10">Lesson10</Link>
        </li>
        <li>
          <Link to="/lesson11">Lesson11</Link>
        </li>
        <li>
          <Link to="/lesson12">Lesson12</Link>
        </li>
        <li>
          <Link to="/lesson13">Lesson13</Link>
        </li>
        <li>
          <Link to="/lesson14">Lesson14</Link>
        </li>
        <li>
          <Link to="/lesson15">Lesson15</Link>
        </li>
        <li>
          <Link to="/lesson16">Lesson16</Link>
        </li>
        <li>
          <Link to="/lesson17">Lesson17</Link>
        </li>
      </ol>
    </nav>
  );
}
export default Navbar;
