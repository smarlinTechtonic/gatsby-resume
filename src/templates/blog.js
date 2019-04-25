import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            dateWritten(fromNow: true)
            body {
                json
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const src = node.data.target.fields.file['en-US'].url;
                return <img src={src} alt={alt} />
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.dateWritten}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    );
}

export default Blog;