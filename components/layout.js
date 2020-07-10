import Head from "next/head";

import Header from "./header";
import NavBar from "./navbar";

import "./Index.scss";
import "./Layout.scss";

const Layout = props => {
    const appTitle = ` HotHunts`;
    const subTitle = `Today's Top 5 Products from ProductHunt`;

    return (
        <div className="Layout">
            <Head>
                <title>HotHunts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>

            <Header appTitle={appTitle} subTitle={subTitle} />
            <div className="Content cards">{props.children}</div>
        </div>
    );
};

export default Layout;