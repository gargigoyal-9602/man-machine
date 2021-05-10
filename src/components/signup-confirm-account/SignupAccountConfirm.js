import React, { useState, useEffect } from 'react';
import { Button, FormGroup } from 'reactstrap';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';

// User define components
import { otpValidation } from '../Validation schemas/otpValidations';
import { fetchUserSuccess } from '../../redux/actions/loginActions';
import { put } from '../../Barriers/apiHelper';
import commands from '../../commands';
import langg from '../../language';

// Custom Css
import './css/index.scoped.css';
import '../login/css/index.scoped.css';

function SignupAccountConfirm(props) {
  console.log(props);
  const [otpError, setOtpError] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);
  const [otpToken, setOtpToken] = useState(false);
  const [timer, setTimer] = useState(60);

  const dispatch = useDispatch();
  const lang = new langg('signupOTPScreen');
  let userData = [];
  if (props.location.state) {
    userData = props.location.state.data;
  }

  // console.log(Object.values(state).length);
  // if (state.signUpData.data) {
  //   userData = state.signUpData.data.data.user;
  // }

  useEffect(() => {
    if (props.location.pathname === '/loginconfirm') {
      commands.user.resendConfirmationOtp(userData.email);
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  const verifyOTP = (values) => {
    setShowSpinner(true);
    console.log(values);
    const data = {
      email: userData.email,
      confirmation_otp: values.otp,
    };
    put(`/users/confirm_account`, data)
      .then(async (res) => {
        console.log(res);
        setOtpError('');
        await dispatch(fetchUserSuccess(res.data.data));
        setOtpToken(true);
        //props.history.push("/");

        let qparams = new URLSearchParams(window.location.search);
        setTimeout(
          () => window.location.replace(qparams.get('redirect') || '/'),
          500
        );
      })
      .catch((err) => {
        console.log(err);
        setOtpError('Invalid OTP');
      })
      .finally(() => setShowSpinner(false));
  };

  const resendOTP = () => {
    setShowSpinner(true);
    let data = {
        email: userData.email,
    };
    put(`/users/resend_confirmation_token`, data)
      .then((res) => {
        if (res.status == 200) {
          setTimer(60);
          window.notify([{ message: res.data?.message || "We have sent an OTP to your email address, to confirm your email address.", type: "success" }]);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setShowSpinner(false));
  };


  useEffect(() => {
    console.log('buddy');
  }, [otpError]);

  const navigateSignUp = async () => {
    // await dispatch(fetchSignUpClear());
    props.history.push('/login');
  };

  return (
    <div className="yt-fp-wrap">
      <span onClick={navigateSignUp} className="d-flex navigate">
        <RiArrowLeftSLine className="mr-2 yt-fp-back-icn" />
        <h3 className="yt-fp-top-back-tag-name">
          {lang.get('signUp', 'Sign Up')}
        </h3>
      </span>
      <h2 className="yt-fp-tag-line">
        {lang.get(
          'subtitle',
          'Get started and discover the best offers around you'
        )}
      </h2>
      <h2 className="yt-fp-tag-line-2">
        {lang.get('otpSent', 'OTP sent to your Email')}
      </h2>
      <div className="yt-fp-form">
        <Formik
          initialValues={{ otp: '' }}
          onSubmit={verifyOTP}
          validationSchema={otpValidation}
        >
          {({ errors, touched, values }) => {
            if (touched.otp && errors.otp) {
              setOtpError('');
            }
            return (
              <Form>
                <FormGroup className="">
                  <img
                    alt="Email Icon"
                    src={require('./images/emal-icn.png')}
                    className={
                      (errors.otp && touched.otp) || otpError
                        ? ' yt-login-icn2'
                        : 'yt-login-icn'
                    }
                  />
                  <Field
                    name="otp"
                    type="text"
                    placeholder="OTP"
                    value={values.otp}
                    className={
                      'form-control' +
                      (errors.otp && touched.otp ? ' is-invalid' : '')
                    }
                  />
                  <span
                    id="yt-signup-email-error"
                    className="yt-login-message-show"
                  />
                  {touched.otp && errors.otp && (
                    <span
                      className="invalid-feedback"
                      style={{ position: 'absolute' }}
                    >
                      {errors.otp}
                    </span>
                  )}
                  {otpError ? (
                    <span
                      className="err_invalid"
                      style={{ position: 'absolute' }}
                    >
                      {otpError}
                    </span>
                  ) : (
                      <></>
                    )}
                </FormGroup>
                {showSpinner ? (
                  <CgSpinner
                    style={{
                      color: 'black',
                      fontSize: 32,
                      width: '100%',
                      margin: 10,
                    }}
                    class="w3-spin"
                  />
                ) : (
                    <Button
                      type="submit"
                      color="secondary yt-login-btn mt-1"
                      block
                    >
                      {lang.get('verifyOTP', 'Verify OTP')}
                    </Button>
                  )}
                <>
                  {!otpToken && (
                    <div className="yt-forpass-bottom-info text-center mt-20">
                      <div>
                        {timer > 0 ? (
                          <div className="otp-timer">00:{timer}</div>
                        ) : (
                            <Button
                              color="link yt-resent-otp-btn"
                              onClick={resendOTP}
                            >
                              {lang.get('resendOTP', 'Resend OTP')}
                            </Button>
                          )}
                      </div>
                    </div>
                  )}
                </>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default withRouter(SignupAccountConfirm);
