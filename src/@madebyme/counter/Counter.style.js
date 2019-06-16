import styled from 'styled-components';

export default component =>
  styled(component)`
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      margin: 10px;
    }

    button {
      width: 40px;
      height: 40px;
      background: #1c656c;
      color: white;
      font-size: 24px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  `;
