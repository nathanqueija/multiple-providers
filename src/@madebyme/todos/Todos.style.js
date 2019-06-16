import styled from 'styled-components';

export default component =>
  styled(component)`
    width: 90%;
    margin: auto;

    padding: 20px;

    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      label {
        margin-bottom: 5px;
        font-weight: 600;
        text-transfrom: uppercase;
      }

      input {
        height: 40px;
        outline: none;
        font-size: 30px;
      }
    }

    .todo {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: #1c656c;
      margin-bottom: 5px;
      align-items: center;

      span {
        :first-child {
          color: white;
        }
        :last-child {
          background: #f52800;
          padding: 5px;
          color: white;
          cursor: pointer;
        }
      }
    }
  `;
