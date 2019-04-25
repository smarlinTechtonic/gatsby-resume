import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Me!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Best way to reach me is to visit <a target="_blank" rel="noopener noreferrer" href="http://google.com">Google! </a></p>
        </Layout>
    );
}

export default ContactPage;