import styled from 'styled-components';

export const ToggleDiv = styled.div`
  display: flex;
  align-items: center;

  span {
      margin-right: 10px;
      color: ${({theme}) => theme.colors.almostGray};
  }

  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;
