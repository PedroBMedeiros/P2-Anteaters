import styled from "styled-components";

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

export const ItemWrapper = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid #dadada;
  transition: 0.1s;
  box-shadow: 0px 0px 15px 2px #dadada8e;
  &:hover {
    box-shadow: 0px 0px 25px 3px #dadada44;
  }
  .header {
    position: relative;
    bottom: 1.4rem;
    h4 {
      font-size: 0.8rem;
      margin-top: -1.2rem;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  .content {
    margin-top: -1.5rem;
  }
  .options {
    position: relative;
    /* bottom: -3rem; */
    span {
      cursor: pointer;
      padding: 2px 8px;
      border-radius: 5px;
      color: ${(props) => props.theme.colors.buttons[props.completed]};
      background-color: ${(props) =>
        props.theme.colors.buttons[props.completed]}17;
      float: left;
    }
    svg {
      float: right;
      cursor: pointer;
      color: ${(props) => props.theme.colors.buttons.incomplete};
      transition: ease-in-out 0.3s;
      &:hover {
        transform: rotate(-4deg);
        font-size: 1.1rem;
      }
    }
  }
`;

export const AddItemWrapper = styled(ItemWrapper)`
  ${(props) => {
    if (props.state === "icon") {
      return `
        position: relative;
        cursor: pointer;
        background: rgb(34, 195, 54);
        background: linear-gradient(40deg, #62f29b, #2dfd7f);
        border: none;
`;
    }
  }};
  min-height: 8rem;
  svg {
    color: ${(props) => props.theme.colors.background};
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .inputs {
    input {
      max-height: 150px;
      overflow-x: hidden;
      overflow-y: auto;
      font-size: 1.5rem;
      width: 80%;
      font-weight: bold;
      padding: 2px 8px;
      margin: 8px 0px;
      display: inline-block;
      border: 1.3px solid transparent;
      color: ${(props) => props.theme.colors.accent};
      background-color: transparent;
      border-radius: 4px;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
    .err {
      color: ${(props) => props.theme.colors.buttons.incomplete};
      margin-left: 0.6rem;
      margin-top: -0.6rem;
      font-size: 0.8rem;
    }
  }

  button {
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    border: 3px solid ${(props) => props.theme.colors.buttons.complete};
    color: ${(props) => props.theme.colors.buttons.complete};
    background-color: transparent;
    margin-left: 0.6rem;
    margin-top: 1rem;
  }
`;
