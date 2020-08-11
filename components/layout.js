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
                <title>Hot Hunts</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Hot Hunts Today " />
                <meta property="og:description" content="Today's Top 5 Products from ProductHunt" />
                <meta property="og:image" content="https://raw.githubusercontent.com/cnuis2cool/JustImages/master/Tech/favicon.png" />
                <meta property="og:url" content="https://hothunts.vercel.app/" />
                <meta name="twitter:title" content="Hot Hunts Today " />
                <meta name="twitter:description" content=" Today's Top 5 Products from ProductHunt." />
                <meta name="twitter:image" content=" https://raw.githubusercontent.com/cnuis2cool/JustImages/master/Tech/favicon.png" />
                <meta name="twitter:card" content="Today's Top 5 Products from ProductHunt" />
                <meta charSet="utf-8" />
            </Head>

            <Header appTitle={appTitle} subTitle={subTitle} />
            <div className="Content cards">{props.children}</div>
        </div>
    );
};

export default Layout;