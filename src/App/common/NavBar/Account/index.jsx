/*
* @component Account
* @type stateless component
* @props {string} name
* @props {string} email
* @requires react,prop-types,Account_ImageAvaatar,style.scss
* @children ImageAvatar
* @redux false
* @actions none
* @description
* this component is used to display user account details.
* like his name profile picture bacdges notification comments etc.
*/
import React from 'react';
import PropTypes from 'prop-types';

import ImageAvatar from './ImageAvatar';

import './style.scss';

const Account = ({ name, email }) => {
  const imgUrl = `bla bla ${email}`;
  return (
    <article className="account_wrapper">
      <article className="user-info">
        <section className="picture" >
          <section className="table-cell">
            <ImageAvatar
              imageUrl={imgUrl}
              alt="profile"
              imageText={name}
            />
          </section>
          <section className="table-cell">
            <span className="repo">355</span>
            <span className="repo">
              <i className="fa fa-circle" aria-hidden="true" />
              <span className="repo">1</span>
            </span>
          </section>
        </section>
        <section className="support" >
          <ol className="list">
            <li className="item"><i className="fa fa-comments" aria-hidden="true" /></li>
            <li className="item"><i className="fa fa-bell" aria-hidden="true" /></li>
            <li className="item"><i className="fa fa-info-circle" aria-hidden="true" /></li>
          </ol>
        </section>
      </article>
    </article>
  );
};
Account.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default Account;
