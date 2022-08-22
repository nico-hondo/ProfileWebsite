import React from 'react'
import PostinganTidakAda from '../../tdakAdaPost'
import DocumentMeta from 'react-document-meta'

const blog = () => {

  const meta = {
    title: 'Blog - Nico Fernando Hondo',
    description: 'Sometimes I write about web development, other times about random interesting stuff.',
    meta: {
      name: {
        keywords: 'html,tags,portfolio,design,meta,document'
      }
    }
  }

  return (
    <DocumentMeta {...meta}>
        <PostinganTidakAda/>
    </DocumentMeta>
  )
}

export default blog