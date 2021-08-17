import React, { Component } from 'react'
import styles from './ProfileInfo.module.css'
import { Link } from 'react-router-dom'
import * as authService from '../../services/authService'


class ProfileInfo extends Component {
  state = {
    formData: {
    firstName: this.props?.profile?.firstName,
    lastName: this.props?.profile?.lastName,
    email: this.props?.profile?.email,
    profilePic: this.props?.profile?.profilePic,
    location: this.props?.profile?.location,
    aboutMe: this.props?.profile?.aboutMe,
    userGender: this.props?.profile?.userGender,
    sexualOrientation: this.props?.profile?.sexualOrientation,
    searchingFor: this.props?.profile?.searchingFor,
  }
}

formRef = React.createRef();

// handleSubmit = e => {
//   e.preventDefault();
//   this.props.handleUpdateProfile(this.state.formData);
// };

handleChange = e => {
  const formData = {...this.state.formData, [e.target.name]: e.target.value};
  this.setState({
    formData
  });
};

  render() {
    const { firstName, lastName, email, profilePic, location, aboutMe, userGender, sexualOrientation, searchingFor} = this.state
    return (
      <>
      <div className={styles.box}>
        <h3>PROFILE DETAILS</h3>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div className={styles.inputBox}>
          <label htmlFor="firstName" className={styles.label}>First Name</label>
          <input
            type="text"
            autoComplete="off"
            id="firstName"
            defaultValue={this.state.formData.firstName}
            name="firstName"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="lastName" className={styles.label}>Last Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="lastName"
            defaultValue={this.state.formData.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            defaultValue={this.state.formData.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="profilePic" className={styles.label}>Profile Pic URL</label>
          <input
            type="profilePic"
            autoComplete="off"
            id="profilePic"
            defaultValue={this.state.formData.profilePic}
            name="profilePic"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="location" className={styles.label}>Location</label>
          <input
            type="location"
            autoComplete="off"
            id="location"
            defaultValue={this.state.formData.location}
            name="location"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="aboutMe" className={styles.label}>About Me</label>
          <input
            type="aboutMe"
            autoComplete="off"
            id="aboutMe"
            defaultValue={this.state.formData.aboutMe}
            name="aboutMe"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="userGender" className={styles.label}>Gender</label>
          <input
            type="userGender"
            autoComplete="off"
            id="userGender"
            defaultValue={this.state.formData.userGender}
            name="userGender"
            onChange={this.handleChange}
          />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="sexualOrientation" className={styles.label}>Sexual Orientation</label>
          <input
            type="sexualOrientation"
            autoComplete="off"
            id="sexualOrientation"
            defaultValue={this.state.formData.sexualOrientation}
            name="sexualOrientation"
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="searchingFor" className={styles.label}>Searching For</label>
          <select 
            name="searchingFor" 
            type="searchingFor"
            id="searchingFor"
            defaultValue={this.state.formData.searchingFor}
            onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="Love">Love</option>
              <option value="Friendship">Friendship</option>
              <option value="Both">Both</option>
          </select>
        </div>


        <button type="submit">Update</button>


      </form>
      </div>
      </>
    );
  }
}

export default ProfileInfo;