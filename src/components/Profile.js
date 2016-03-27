import React from 'react';

const headerStyles = { style : { margin: 0 } };

const imageStyles = { style : { height: 200, width: 200 } };

const linkStyles = { style: { cursor: 'pointer' } };

export const Avatar = (props) => <img { ...props } { ...imageStyles } />;

export const Name = ({ children }) => <h3 { ...headerStyles }>{children}</h3>;

const Link = ({ children, href }) =>
  <span { ...linkStyles } onClick={Link.changeUrl.bind(this, href)}>
    <h3 { ...headerStyles }>
      <small>
        {children}
      </small>
    </h3>
  </span>;

Link.changeUrl = (href) => window.location.replace(href);

export const ProfileLink = ({ username, children }) =>
  <Link href={`https://github.com/${username}`}>
    {username}
  </Link>;
