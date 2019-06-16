import React from 'react';

import styled from 'styled-components';

const Desc = styled.div`
  border: 2px dashed #1c656c;
  border-radius: 8px;
  width: 80%;
  margin: 20px auto;
  padding: 30px 20px 20px 20px;
  position: relative;
  :after {
    content: 'Description:';
    position: absolute;
    top: 10px;
    left: 10px;
    color: #00293c;
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

const Description = ({ children }) => {
  return <Desc>{children}</Desc>;
};

export default Description;
