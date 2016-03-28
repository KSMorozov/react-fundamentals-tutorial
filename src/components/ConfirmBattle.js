import React from 'react';

const ConfirmBattle = ({...props}) =>
  props.isLoading
    ? <p>LOADING. . .</p>
    : <p>CONFIRM BATTLE!</p>;

export default ConfirmBattle;
