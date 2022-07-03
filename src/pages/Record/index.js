import React from 'react';
import { useParams } from 'react-router-dom';

function Record() {
  let params = useParams();
  return (
    <div>
      <h2>Record</h2>
      <p>id: {params.id}</p>
    </div>
  );
}

export default Record;
