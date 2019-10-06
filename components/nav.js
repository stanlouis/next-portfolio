import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">
      <a  className="logo">StanSwift</a>
    </Link>
    <ul>
      <li>
        <Link href="/" >
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        width: 100%;
        background-color: darkgreen;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: darkgrey;
        text-decoration: none;
      }

      a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      .logo {
        display: inline-block;
        padding: 0 30px;
        font-weight: bold;
        font-size: 1.2rem;
      }
    `}</style>
  </nav>
);

export default Nav;
