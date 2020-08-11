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
                <meta property="og:title" content="Hot Hunts Today " key="ogtitle" />
                <meta property="og:description" content="Today's Top 5 Products from ProductHunt" key="ogdescription" />
                <meta property="og:image" content="https://raw.githubusercontent.com/cnuis2cool/JustImages/master/Tech/favicon.png" key="ogimage" />
                <meta property="og:url" content="https://hothunts.vercel.app/" key="ogurl" />
                <meta name="twitter:image" content=" https://raw.githubusercontent.com/cnuis2cool/JustImages/master/Tech/favicon.png" key="twimage" />
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@cnuis2cool" key="twcreator" />
                <meta charSet="utf-8" />
            </Head>

            <Header appTitle={appTitle} subTitle={subTitle} />
            <div className="Content cards">{props.children}</div>
        </div>
    );
};

export default Layout;