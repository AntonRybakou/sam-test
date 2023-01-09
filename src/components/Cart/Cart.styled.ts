import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: cart;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CartImage = styled.img`
  width: 60px;
`;

export const TotalPrice = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 900;
`;

export const CheckoutButton = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  background-color: #0b3d91;
  color: white;
  cursor: pointer;

  :hover {
    color: #51f85a;
  }

  :active {
    transform: scale(0.98);
    background: #0b3d91;
    box-shadow: inset 10px 10px 25px #061f49,
      inset -10px -10px 25px #115cda;
`;

export const ModalButton = styled.button`
  display: block;
  margin: 10px auto;
  background: none;
  border: 1px solid black;
`;

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '32px',
  },
};
