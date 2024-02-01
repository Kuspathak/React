import { SlLocationPin } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <div className="mt-3 mx-auto">
        <h3 className="text-center">Have Some Question?</h3>
        <p className="mx-auto w-50 ">
          Have any questions or inquiries? We're here to help! Whether you want
          to learn more about our services, discuss a potential collaboration,
          or simply say hello, feel free to reach out. Fill out the form below,
          and we'll get back to you as soon as possible. Your thoughts are
          important to us, and we appreciate your interest.
        </p>
      </div>

      <div className="container mt-5 h-100vh">
        <div className="row">
          <div className="col-8">
            <div className="container mt-5 w-100 shadow border rounded p-2">
              <h4 className="text-center">
                Get in Touch
              </h4>
              <form>
                <div className="mb-3">
                  <input
                    placeholder="Name"
                    type="text"
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-4">
            <div className="container border shadow rounded bg-gray mt-3" style={{ height: '100%' }}>
              <h3 className="text-center mt-2 ">Contact Us</h3>
              <div className="d-flex flex-column gap-3 p-3">
                <div className="d-flex gap-2 align-items-center">
                  <div className="icon-container">
                    <SlLocationPin className="icon" />
                  </div>
                  <p>Address: Dhulikhel</p>
                </div>

                <div className="d-flex gap-2 align-items-center">
                  <div className="icon-container">
                    <CiPhone className="icon" />
                  </div>
                  <p>Phone: +9779867410454</p>
                </div>

                <div className="d-flex gap-2 align-items-center">
                  <div className="icon-container">
                    <AiOutlineMail className="icon" />
                  </div>
                  <p>Email: sgrpathak2001@gmail.com</p>
                </div>

                <div className="d-flex gap-2 align-items-center">
                  <div className="icon-container">
                    <CiFacebook className="icon" />
                  </div>
                  <a href="https://www.facebook.com/kusal.phatak" target="_blank" rel="noopener noreferrer">Facebook Profile</a>
                </div>

                <div className="d-flex gap-2 align-items-center">
                  <div className="icon-container">
                    <CiLinkedin className="icon" />
                  </div>
                  <a href="your_linkedin_profile_url" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
