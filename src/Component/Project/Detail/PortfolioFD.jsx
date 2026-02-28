import { Helmet } from "react-helmet-async";
import PostinganSementara from "../../../tdakAdaPost";

const PortfolioLP = () => {
    return(
        <>
            <Helmet>
            <title>Mobile Design - Freshly Dropped</title>
            <meta name="description" content="Sometimes I write about web development, other times about random interesting stuff" />
            <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
            <meta name="author" content="Nico Fernando Hondo" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="canonical" href="https://nicofernando.my.id/blog" /> */}
            </Helmet>
            <PostinganSementara/>
        </>
    )
}

export default PortfolioLP;