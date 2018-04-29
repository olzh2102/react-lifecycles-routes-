import React from 'react';

const Auth = (props) => {
  const pass = 'password123';

  if(pass !== 'password1233') {
    return <h3>U r not authorized</h3>;
  } else {
    return props.children;
  }
}

export default Auth;