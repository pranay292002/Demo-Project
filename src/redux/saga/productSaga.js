import { put, takeLatest } from "redux-saga/effects";
import { setProducts, getProducts } from "../slices/productSlice";

function* fetchProducts() {
  try {
    const response = yield fetch("https://fakestoreapi.com/products");
    const data = yield response.json();
    yield put(getProducts(data));
  } catch (error) {
    console.log(error.message);
    yield put(getProducts(error.message));
  }
}

function* productSaga() {
  yield takeLatest(setProducts, fetchProducts);
}

export default productSaga;
