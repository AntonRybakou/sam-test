import React, { ReactElement } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';

import { CartItem, CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { cartCheckout } from 'store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

const Wrapper = styled.div`
  border: 1px solid black;
  grid-area: cart;
  padding: 10px;
`;

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Cart = (): ReactElement => {
  const CartList = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const showModal = (): void => {
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
      <h2>CART</h2>
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
        <div>
          <p>Total {getTotalPrice()}</p>
          <button
            onClick={() => {
              showModal();
            }}
          >
            Checkout
          </button>
        </div>
      )}
      <Modal
        isOpen={isModal}
        onRequestClose={() => {
          showModal();
          dispatch(cartCheckout());
        }}
        style={modalStyles}
      >
        <div>Thank you for your purchase</div>
      </Modal>
    </Wrapper>
  );
};
