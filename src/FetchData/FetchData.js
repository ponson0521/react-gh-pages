import React from 'react';
import UseFetch from '../Hook/UseFetch'

function FetchData() {
  const {data, isLoading, error} = UseFetch(`https://api.github.com/users/ponson0521/repos`);

  if (isLoading) {
    return <h1>isLoading....</h1>
  } 
  else if (data) {
    return (
      <div>
        My github repository
        {data.map((value) => <li key={value.id}>{value.name}</li>)}
      </div>
    )
  } 
  else {
    console.log(error);
    return <h1>data can't fetch</h1>
  }
}

export default FetchData;
