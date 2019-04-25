import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const contentfulData = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: dateWritten, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        dateWritten (fromNow: true)
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
                        <li className={blogStyles.blogPost} key={edge.node.title}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.dateWritten}</p>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage;