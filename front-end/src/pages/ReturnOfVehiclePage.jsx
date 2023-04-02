import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ReturnOfVehiclePage.module.scss';

const ReturnOfVehiclePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8lfvu6w',
        'template_e7yl9tj',
        form.current,
        'OobbSW-DHtFMhWbqK'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mainContainer">
      <main>
        <h1>Return of Vehucle Page</h1>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <div>
            <label for="name">Name</label>
            <input type="text" name="user_name" id="name" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="user_email" id="email" />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea name="message" id="message" />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ReturnOfVehiclePage;
