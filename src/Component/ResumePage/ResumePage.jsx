import React from 'react';
import DocumentMeta from 'react-document-meta';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumePage = () => {

    const meta = {
        title: 'Resume - Nico Fernando Hondo',
        description: 'My Resume',
        meta:{
            name:{
                keywords: 'react,meta,tags,html,document'
            }
        }
    }

    // const pdfUrl = "https://drive.google.com/uc?export=download&id=1qPmafRSA1p8RqVPWZhl7QHQe3XNKiGIG";

    return(
        <DocumentMeta {...meta}>

            {/* <div style={{height: "100vh"}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfUrl}/>
                </Worker>
            </div> */}

            <div style={{height: "100vh", overflow: "hidden"}}>
                <iframe 
                    src="https://drive.google.com/file/d/1qPmafRSA1p8RqVPWZhl7QHQe3XNKiGIG/preview"
                    width="100%"
                    height="100%"
                    allow='autoplay' 
                    title='This is my resume'
                >
                </iframe>
            </div>
        </DocumentMeta>
    )
}
export default ResumePage;