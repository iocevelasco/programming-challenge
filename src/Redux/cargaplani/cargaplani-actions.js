import { uuidv4 } from "@firebase/util";
import { onSnapshot } from "firebase/firestore";
import { createOrderDocument, getOrders } from "../../Firebase/firebase-utils";
import { store } from "../store";
import {
  CREATE_PLANI_FAIL,
  FETCH_PLANI_SUCCESS,
  FETCH_PLANI_START,
  FETCH_PLANI_FAIL,
  CLEAR_ERROR,
} from "./cargaplani-types";

export const createOrderFail = (error) => ({
  type: CREATE_PLANI_FAIL,
  payload: error,
});

export const createOrder = (orderData) => async (dispatch) => {
  const {
    user: { currentUser },
  } = store.getState();

  try {
    const orderRef = await createOrderDocument({
      ...orderData,
      orderId: uuidv4(),
      userId: currentUser.id,
    });

    onSnapshot(orderRef, (_snapShot) => {
      dispatch(getFullOrders(currentUser.id));
    });
  } catch (error) {
    dispatch(createOrderFail(error));
  }
};

// Para manejar el loading
export const getOrdersStart = () => ({
  type: FETCH_PLANI_START,
});

// Para recibir las ordenes
export const getOrdersSuccess = (orders) => ({
  type: FETCH_PLANI_SUCCESS,
  payload: orders,
});

// SI hay un error
export const getOrdersFail = (error) => ({
  type: FETCH_PLANI_FAIL,
  payload: error || "Upsss, algo salio mal.",
});

// Para recibir todas las ordenes
export const getFullOrders = (userId) => async (dispatch) => {
  const {
    orders: { orders: currentOrdersInRedux },
  } = store.getState();

  dispatch(getOrdersStart());

  try {
    const orders = await getOrders(
      userId,
      currentOrdersInRedux,
      dispatch,
      getFullOrders
    );
    dispatch(getOrdersSuccess(orders));
  } catch (error) {
    dispatch(getOrdersFail(error.message));
  }
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});
