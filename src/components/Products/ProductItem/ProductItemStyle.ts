import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  transition: all 0.6s ease;
  background-color: #e8e8e8;

  :hover {
    box-shadow: -7px -7px 15px 0 rgba(255, 255, 255, 0.7),
      7px 7px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 800;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const Price = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
`;

export const BuyButton = styled.button`
  display: inline;
  width: 60px;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 50%;
  background-color: #0b3d91;
  color: white;

  :hover {
    color: #f4412d;
  }

  :active {
    transform: scale(0.98);
    background: #0b3d91;
    box-shadow: inset 10px 10px 25px #061f49,
      inset -10px -10px 25px #115cda;
`;
