import Link from "next/link";

import "./Header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header">{props.appTitle} &nbsp;&nbsp; <span className="subheader">{props.subTitle}</span></div>
  </Link>
);

export default Header;