import React, { PropTypes } from 'react';

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

const Results = (props) =>
  <div>
    Results: {puke(props)}
  </div>;

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
};

export default Results;
