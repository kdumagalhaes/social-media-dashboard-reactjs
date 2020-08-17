import styled from 'styled-components';

export const ToggleButtonDiv = styled.div`
  width: 50px;
  height: 26px;
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
  background: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
`;

export const ToggleCircleDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.color1};
  border-radius: 50%;
  margin-left: ${({ rightMovement }) => rightMovement};
  transition: all 0.3s;
`;
