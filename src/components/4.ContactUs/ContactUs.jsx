import React from "react";
import Lottie from "lottie-react";
import "./ContactUs.css";
import { useForm, ValidationError } from "@formspree/react";
import emailAnimation from "./../../../public/animation/Animation - 1727784078492.json";
import doneAnimation from "./../../../public/animation/Animation - 1728542506693.json";
function ContactUs() {
  const [state, handleSubmit] = useForm("xnnqayab");

  return (
    <div>
      <section className="Contact ">
        <h1 className="title">
          <span className="icon-mail"></span>
          ContactUs
        </h1>
        <p>
          Contact us for more information and Get notified when i publish
          something new.
        </p>

        <div className="flexx">
          <form onSubmit={handleSubmit} className="">
            <div className="flexx">
              <label htmlFor="email">Email Address</label>
              <input required type="email" name="email" id="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="massage flexx" style={{ marginTop: "24px" }}>
              <label htmlFor="Message"> Your Message</label>
              <textarea required name="message" id="Message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="submit"
            >
              {state.submitting ? "Submitting...." : "Submit"}
            </button>
            {state.succeeded && (
              <p
                className="done"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: " var(--title)",
                  fontSize: "16px",
                  marginTop: "1.7rem",
                }}
              >
                <Lottie
                  loop="false"
                  style={{ height: 45 }}
                  animationData={doneAnimation}
                />
                Your Message has been sent successfuly &#128077;
              </p>
            )}
          </form>
          <div className="animation">
            <Lottie style={{ height: 355 }} animationData={emailAnimation} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
