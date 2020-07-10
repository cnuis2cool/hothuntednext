import Link from "next/link";

import "./Header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header">
      <svg id="icon-charge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="#2a2a31" d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19">
        </path>
        <line stroke="#2a2a31" x1="23" y1="13" x2="23" y2="11"></line>
        <polyline className="charging" stroke="#ea3970" points="11 6 7 12 13 12 9 18"></polyline>
      </svg>
      {props.appTitle} &nbsp;&nbsp; <span className="subheader">{props.subTitle}</span>
    </div>
  </Link>
);

export default Header;