import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFullName4">Full Name</label>
            <input type="text" className="form-control" id="inputFullName4" placeholder="Full Name" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmailAddress">Email Address</label>
          <input type="email" className="form-control" id="inputEmailAddress" placeholder="example@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Message</label>
          <textarea className="form-control" id="inputAddress2" placeholder="In Episode 10,...." />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
