import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import './contact.scss';

const Contact = () => (
  <Layout>
    <div className='contact-form'>
      <h1>Contact Me</h1>
      <p>
        If you have any inquiries or just want to say hi, fill out the form
        below or send an email to Mark@MarkMurphy.io and let's chat.
      </p>
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name"/>
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email"/>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" placeholder="Message"/>
        </div>
        <Button>
          Submit 
        </Button>
      </form>
    </div>
  </Layout>
)

export default Contact;
