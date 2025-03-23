import React from 'react';
import './login.css';

const Register = () => {
  return (
    <div className="form-container">
      <div class="container1">
        <img src="/images/register_food.jpeg" alt="food"/>
      </div>
      <form className="container2">
        <div className="inner-form">
          <label className="label" htmlFor="name">Full Name:</label>
          <input className="input" type="text" name="name"placeholder="enter Full Name...." />
        </div>

        <div className="inner-form">
          <label className="label" htmlFor="mail">Email:</label>
          <input className="input" type="email" name="mail"placeholder="enter mail..." />
        </div>

        <div className="inner-form">
          <label className="label" htmlFor="password" >Password:</label>
          <input className="input" type="password" name="password" placeholder="enter Password...."/>
        </div>

        <div className="inner-form">
          <label className="label" htmlFor="check">Check Me Out</label>
          <input className="checkbox" type="checkbox" name="check" />
        </div>

        <div className="inner-form">
          <label className="label"></label> {/* Empty label for alignment */}
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Register;
