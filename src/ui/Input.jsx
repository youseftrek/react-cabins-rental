import styled from "styled-components";

const Input = styled.input`
  padding: 1rem 2rem;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  background-color: var(--color-grey-0);
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  outline: none;
  box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;

  &:focus {
    border-color: var(--color-brand-600);
    box-shadow: var(--color-brand-op-25) 0px 0px 0px 3px;
  }
`;

export default Input;
