import {guidGenerator} from '../../utils/helperFunctions';
import {
  SET_SELECTED_ADDRESS,
  SET_DELIVERY_SLOT,
  SET_PAYMENT,
  SET_CART_BILL_DETAILS,
} from '../constants/userTypes';

const initialState = {
  latestOrder: {
    selectedAddress: '',
    deliverySlot: {},
    payment: '',
    priceDetail: {},
  },
  orders: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        latestOrder: {...state.latestOrder, selectedAddress: action.payload},
      };

    case SET_DELIVERY_SLOT:
      return {
        ...state,
        latestOrder: {...state.latestOrder, deliverySlot: action.payload},
      };

    case SET_CART_BILL_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        latestOrder: {
          ...state.latestOrder,
          priceDetail: action.payload,
        },
      };

    case SET_PAYMENT:
      console.log('data--->', action.payload);
      const latestOrder = {
        ...state.latestOrder,
        payment: action.payload,
        orderId: guidGenerator(),
        status: 'placed',
      };
      return {
        ...state,
        orders: [...state.orders, latestOrder],
      };

    default:
      return state;
  }
};
export default ordersReducer;
