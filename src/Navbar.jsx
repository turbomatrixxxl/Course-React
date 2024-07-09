import React from 'react';
import { Link } from 'react-router-dom';
import './';

function Navbar() {
  const olStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    // width: '30px',
    // height: '30px',
    // borderRadius: '50%',
    // backgroundColor: 'blue',
    // color: 'red',
  };

  const homeStyles = {
    backgroundColor: 'blue',
    width: 'fit-content',
    color: 'red',
    position: 'fixed',
    top: '40px',
    right: '20px',
    padding: '10px',
    borderRadius: '8px',
  };

  return (
    <nav>
      <ol style={olStyles}>
        <li style={homeStyles}>
          <Link to="/">
            <span
              style={{
                color: 'white',
              }}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="lesson1">Introducere în React</Link>
        </li>
        <li>
          <Link to="/lesson2">Stilizarea</Link>
        </li>
        <li>
          <Link to="/lesson3">Events și state</Link>
        </li>
        <li>
          <Link to="/lesson4">Forms</Link>
        </li>
        <li>
          <Link to="/lesson5">LifecycleLifecycle</Link>
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
