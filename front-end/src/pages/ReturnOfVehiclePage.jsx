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
        form.current
        //'OobbSW-DHtFMhWbqK'
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
    <div className="mainCotainer">
      <main>
        <h1>Return of Vehucle Page</h1>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <div>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" />
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
