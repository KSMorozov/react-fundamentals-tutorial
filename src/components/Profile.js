import React, { Component } from 'react';

const headerStyles = { style : { margin: 0 } };

const imageStyles = { style : { height: 200, width: 200 } };

export const Avatar = (props) => <img {...props} {...imageStyles} />;

export const Name = ({children}) => <h3 {...headerStyles}>{children}</h3>;

export const Link = ({username, children}) =>
  <a href={`https://github.com/${username}`}>
    <h3 {...headerStyles}>
      <small>
        {children}
      </small>
    </h3>
  </a>;
