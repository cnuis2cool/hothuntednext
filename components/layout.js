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

                {/* /<!-- COMMON TAGS --> */}
                <title>Hot Hunts</title>
                {/* <!-- Search Engine --> */}
                <meta name="description" content="Today's Top 5 Products from ProductHunt" />
                <meta name="image" content="https://hothunts.vercel.app/hothunts_1200_600.png" />
                {/* <!-- Schema.org for Google --> */}
                <meta itemprop="name" content="Hot Hunts" />
                <meta itemprop="description" content="Today's Top 5 Products from ProductHunt" />
                <meta itemprop="image" content="https://hothunts.vercel.app/hothunts_1200_600.png" />
                {/* <!-- Twitter --> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Hot Hunts" />
                <meta name="twitter:description" content="Today's Top 5 Products from ProductHunt" />
                <meta name="twitter:site" content="@cnuis2cool" />
                <meta name="twitter:creator" content="@cnuis2cool" />
                <meta name="twitter:image:src" content="https://hothunts.vercel.app/hothunts_1200_600.png" />
                {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
                <meta name="og:title" content="Hot Hunts" />
                <meta name="og:description" content="Today's Top 5 Products from ProductHunt" />
                <meta name="og:image" content="https://hothunts.vercel.app/hothunts_1200_600.png" />
                <meta name="og:url" content="https://hothunts.vercel.app/" />
                <meta name="og:site_name" content="HotHunts" />
                <meta name="og:type" content="website" />

                <meta charSet="utf-8" />
            </Head>

            <Header appTitle={appTitle} subTitle={subTitle} />
            <div className="Content cards">{props.children}</div>
        </div>
    );
};

export default Layout;