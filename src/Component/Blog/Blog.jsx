import React from 'react'
import PostinganTidakAda from '../../tdakAdaPost'
// import DocumentMeta from 'react-document-meta'
import { Helmet } from 'react-helmet-async';

const blog = () => {

  // const meta = {
  //   title: 'Blog - Nico Fernando Hondo',
  //   description: 'Sometimes I write about web development, other times about random interesting stuff.',
  //   meta: {
  //     name: {
  //       keywords: 'html,tags,portfolio,design,meta,document'
  //     }
  //   }
  // }

  return (
    <>
      <Helmet>
        <title>Blog - Nico Fernando Hondo</title>
        <meta name="description" content="Sometimes I write about web development, other times about random interesting stuff" />
        <meta name="keywords" content="html,tags,portfolio,design,document,meta" />
        <meta name="author" content="Nico Fernando Hondo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="canonical" href="https://nicofernando.my.id/blog" /> */}
      </Helmet>
      <PostinganTidakAda/>
    </>
  )
}

export default blog