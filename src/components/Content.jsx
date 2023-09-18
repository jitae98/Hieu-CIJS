import Input from "./Input";
import InputEmail from "./InputEmail";
import InputPW from "./InputPW";

const Content = () => {
  return (
    <div className="content">
      <h2> Sign up for an account</h2>
      <span>
        Signing up for an account is free and easy. Fill out the form below to
        get started. JavaScript is required to to continue.
      </span>
      <p>
        Username
        <br />
      </p>
      <Input />
      <p>
        Password (4 characters minimum)
        <br />
      </p>
      <InputPW />
      <p>
        Password Confirm
        <br />
      </p>
      <InputPW />
      <p>
        Email
        <br />
      </p>
      <InputEmail />
      <p>
        By clicking the &quot;Sign up&quot; button below, I certify that I have
        read and agree to the TMDB terms of use and privacy policy.
      </p>
      <button className="signUpButton">
        <strong>Đăng ký</strong>
      </button>
      <button className="cancelButton">
        <strong>Cancel</strong>
      </button>
    </div>
  );
};

export default Content;
