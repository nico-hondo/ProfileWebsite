// import PostinganSementara from '../../../tdakAdaPost';
import { Helmet } from 'react-helmet-async';

const PortfolioLP = () => {

    return(
        <>
            <Helmet>
                <title>Web Design for Villa Tolping</title>
                <meta name="description" content="Study Case" />
                <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
                <meta name="author" content="Nico Fernando Hondo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="canonical" href="https://nicofernando.my.id/blog" /> */}
            </Helmet>

            <div style={{height: "100vh", overflow: "hidden"}}>
                <iframe 
                    src="https://drive.google.com/file/d/1ZBtpZ5c6OMGKWP2isJ5kimZ9MUonFq7j/preview"
                    width="100%"
                    height="100%"
                    allow='autoplay' 
                    title='Study Case Web Design for Villa Tolping'
                >
                </iframe>
            </div>
        </>
    )
}

export default PortfolioLP;