import React from 'react';
// import DocumentMeta from 'react-document-meta';
import { Helmet } from 'react-helmet-async';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumePage = () => {

    // const meta = {
    //     title: 'Resume - Nico Fernando Hondo',
    //     description: 'My Resume',
    //     meta:{
    //         name:{
    //             keywords: 'react,meta,tags,html,document'
    //         }
    //     }
    // }

    // const pdfUrl = "https://drive.google.com/uc?export=download&id=1qPmafRSA1p8RqVPWZhl7QHQe3XNKiGIG";

    return(
        <>
        {/* // <DocumentMeta {...meta}> */}

            {/* <div style={{height: "100vh"}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfUrl}/>
                </Worker>
            </div> */}
        
            <Helmet>
                <title>Resume - Nico Fernando Hondo</title>
                <meta name="description" content="My Resume" />
                <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
                <meta name="author" content="Nico Fernando Hondo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="canonical" href="https://nicofernando.my.id/resume" /> */}
            </Helmet>
            <div style={{height: "100vh", overflow: "hidden"}}>
                <iframe 
                    src="https://drive.google.com/file/d/1UC9RNG2IK3IOzytbHgVMW6zrs3hXCGGJ/preview"
                    width="100%"
                    height="100%"
                    allow='autoplay' 
                    title='This is my resume'
                >
                </iframe>
            </div>
        </>
    )
}
export default ResumePage;