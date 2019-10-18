import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const contentfulData = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        publishDate (fromNow: true)
                    }
                }
            }
        }
      `);
    
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.posts} >
                {contentfulData.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post} key={edge.node.title}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishDate}</p>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;