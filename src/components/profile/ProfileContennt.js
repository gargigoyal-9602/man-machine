import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

import { AllModal } from '../../components';
import lang from '../../language';
import './css/index.scoped.css';

function ProfileContennt(props) {
  const profileeditlang = new lang('editProfileScreen');
  const state = useSelector((state) => state.logInReducer.loginData);
  const user = state.user;
  const [ShowEditProfileModal, EditProfilefunc] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState(require('./images/user.png'));
  const openEditProfileModal = () => EditProfilefunc(!ShowEditProfileModal);

  const history = useHistory();
  const routeToChangePassword = () => {
    let path = '/profile/changepassword';
    history.push(path);
  };

  useEffect(() => {
    if (props.userData && Object.keys(props.userData).length > 0) {
      setUserName(props.userData.name);
      setUserEmail(props.userData.email);
      setPhone(props.userData.phone_number);
      props.userData.profile_picture && setImg(props.userData.profile_picture);
      EditProfilefunc(false);
    }
  }, [props]);
  useEffect(() => {}, [username, userEmail, phone]);
  useEffect(() => {}, [ShowEditProfileModal]);

  return (
    <div className="profile-pg-inner-wrap p-4 bg-white radius-10 profile-pg-mb-30">
      {ShowEditProfileModal && (
        <AllModal
          userData={{ user: props.userData }}
          modalName="editprofile"
          isOpen={ShowEditProfileModal}
          toggle={openEditProfileModal}
        />
      )}
      <div className="profile-pg-inner-wrapper">
        <div className="profile-tab-content">
          <Row className="yt-cm-ptc-row">
            <Col md={12} className="yt-cm-ptc-col">
              <div className="d-flex align-items-center mb-5 yt-profile-img-nm-wrap">
                <div className="img-upload d-flex align-items-center justify-content-center">
                  <img alt="Profile Pics" src={img} className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col md={6} className="yt-cm-ptc-col">
              <div className="profile-data-wrap">
                <span className="profile-data-tag">
                  {profileeditlang.get('name', 'Name')}
                </span>
                <p className="profile-user-name py-2">{username}</p>
              </div>
            </Col>
            <Col md={6} className="yt-cm-ptc-col">
              <div className="profile-data-wrap">
                <span className="profile-data-tag">
                  {profileeditlang.get('email', 'Email')}
                </span>
                <p className="profile-user-name py-2">{userEmail}</p>
              </div>
            </Col>
          </Row>
          <Row className="yt-cm-ptc-row yt-btm-inf">
            <Col md={6} className="yt-cm-ptc-col">
              <div className="profile-data-wrap">
                <span className="profile-data-tag">
                  {profileeditlang.get('phno', 'Phone No')}
                </span>
                <p className="profile-user-name py-2">{phone}</p>
              </div>
            </Col>
            <Col md={12}>
              <div
                className={
                  'd-flex align-items-center justify-content-end' /*"justify-content-xl-between"*/
                }
              >
                {user?.is_socal_login ? (
                  <span />
                ) : (
                  <Button
                    color="link profile-edit-pass mr-2 p-xl-0"
                    onClick={routeToChangePassword}
                  >
                    {profileeditlang.get('changePassword', 'Change Password')}
                  </Button>
                )}
                <Button
                  color="secondary profile-edit-btn"
                  onClick={() => EditProfilefunc(true)}
                >
                  <span style={{ 'align-text': 'center' }}>
                    {profileeditlang.get('editProfile', 'Edit Profile')}
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ProfileContennt;
