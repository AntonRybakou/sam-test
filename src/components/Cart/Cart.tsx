import React, { ReactElement } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';

import CartIcon from 'accets/icons/cart.png';
import { CartItem, CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { cartCheckout } from 'store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Wrapper = styled.div`
  grid-area: cart;
  padding: 10px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CartImage = styled.img`
  width: 60px;
`;

const TotalPrice = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 900;
`;

const CheckoutButton = styled.button`
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  background-color: #0b3d91;
  color: white;

  :hover {
    color: #51f85a;
  }

  :active {
    transform: scale(0.98);
    background: #0b3d91;
    box-shadow: inset 10px 10px 25px #061f49,
      inset -10px -10px 25px #115cda;
`;

const modalStyles = {
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

const ModalButton = styled.button`
  display: block;
  margin: 10px auto;
  background: none;
  border: 1px solid black;
`;

export const Cart = (): ReactElement => {
  const CartList = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const toggleModal = (): void => {
    setIsModal(!isModal);
  };

  const getTotalPrice = (): number => {
    let total = 0;

    CartList.forEach(el => {
      total += el.price * el.quantity;
    });

    return total;
  };

  return (
    <Wrapper>
      <Title>
        <CartImage src={CartIcon} alt="cartLogo" />
        Cart
      </Title>
      {CartList.length === 0 && (
        <div style={{ textAlign: 'center', fontSize: '16px' }}>Your cart is empty</div>
      )}
      {CartList.map((el: CartItemPropsType) => {
        return (
          <CartItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            price={el.price}
            image={el.image}
            quantity={el.quantity}
          />
        );
      })}
      {CartList.length > 0 && (
        <TotalPrice>
          <p>Total: {getTotalPrice()}</p>
          <CheckoutButton
            onClick={() => {
              toggleModal();
            }}
          >
            Checkout
          </CheckoutButton>
        </TotalPrice>
      )}
      <Modal
        isOpen={isModal}
        onRequestClose={() => {
          toggleModal();
          dispatch(cartCheckout());
        }}
        style={modalStyles}
      >
        <div>Thank you for your purchase</div>
        {/* <div>Total: {getTotalPrice()}</div> */}
        <ModalButton
          onClick={() => {
            dispatch(cartCheckout());
            toggleModal();
          }}
        >
          Close &#10060;
        </ModalButton>
      </Modal>
    </Wrapper>
  );
};
