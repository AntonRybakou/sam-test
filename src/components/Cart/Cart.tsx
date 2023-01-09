import React, { ReactElement } from 'react';

import Modal from 'react-modal';

import CartIcon from 'accets/icons/cart.png';
import {
  Wrapper,
  Title,
  CartImage,
  TotalPrice,
  CheckoutButton,
  ModalButton,
  modalStyles,
} from 'components/Cart/Cart.styled';
import { CartItem, CartItemPropsType } from 'components/Cart/CartItem/CartItem';
import { cartCheckout } from 'store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

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
        ariaHideApp={false}
        onRequestClose={() => {
          toggleModal();
          dispatch(cartCheckout());
        }}
        style={modalStyles}
      >
        <div>Thank you for your purchase</div>
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
