import React from 'react'
import PostinganTidakAda from '../../tdakAdaPost';
import DocumentMeta from 'react-document-meta';

const Project = () => {

  const meta = {
    title: 'Projects - Nico Fernando Hondo',
    description: 'Here are some of my past works personal projects',
    meta:{
      name:{
        keywords: 'html,tags,portfolio,design,document,meta'
      }
    }
  }

  return (
    <DocumentMeta {...meta}>
        <PostinganTidakAda/>
    </DocumentMeta>
  )
}

export default Project