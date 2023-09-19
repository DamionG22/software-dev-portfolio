import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send the data to a server or perform some action.
    console.log('Form data:', formData);
  };
  // export default function Contact() {
  return (

    <article id="contact-me" class="contact">
       <h1 class="h1myname">Damion Gallarza </h1><h2 class="h2NonHome">Web Development Student</h2>
      <div class="title">
        <h1>Contact Me </h1>
      </div>
      <section class="ref-links">
        <p>
          <a href="mailto:damiongallarza@gmail.com"> Email Me</a>

        </p>
      </section>
      <section class="ref-links">
        <p>
          <a href="https://www.linkedin.com/in/damion-gallarza-8706b7147/
                 ">Linkedin</a>
        </p>
      </section>
      <section class="ref-links">
        <p>
          <a href="tel:623-687-4585">Call or Text Me </a>
        </p>
      </section>

      <section class="ref-links">
        <p>
          <a href="https://github.com/DamionG22">Visit My Git Hub!</a>
        </p>
      </section>
      <section className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </article>
  );
}