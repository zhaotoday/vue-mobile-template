import helpers from "jt-helpers";

const types = helpers.keyMirror({
  UpdateProductNumber: null,
  SelectProduct: null,
  SelectAllProducts: null,
  ClearProducts: null,
});

const state = {
  products: [],
};

const getters = {
  selectedProducts(state) {
    return state.products.filter(({ selected }) => selected);
  },
  totalPrice(state) {
    const selectedProducts = state.products.filter(({ selected }) => selected);

    if (selectedProducts.length) {
      return selectedProducts
        .map(({ price, number }) => price * number)
        .reduce((prev, current) => prev + current);
    } else {
      return 0;
    }
  },
  allProductsSelected(state) {
    const { products } = state;

    return !!(
      products.length &&
      products.filter(({ selected }) => selected).length === products.length
    );
  },
};

const mutations = {
  [types.UpdateProductNumber](state, { product, number }) {
    const index = state.products.findIndex((item) => item.id === product.id);

    if (index === -1) {
      state.products.push({ ...product, selected: true, number: 1 });
    } else {
      if (number) {
        state.products[index].number = number;
      } else {
        state.products.splice(index, 1);
      }
    }
  },
  [types.SelectProduct](state, { product }) {
    product.selected = !product.selected;
  },
  [types.SelectAllProducts](state, { selected }) {
    state.products = state.products.map((item) => ({ ...item, selected }));
  },
  [types.ClearProducts](state) {
    state.products = [];
  },
};

const actions = {
  updateProductNumber({ commit }, { product, number }) {
    commit(types.UpdateProductNumber, { product, number });
    return { product, number };
  },
  selectProduct({ commit }, { product }) {
    commit(types.SelectProduct, { product });
    return { product };
  },
  selectAllProducts({ commit, getters }) {
    const selected = !getters.allProductsSelected;

    commit(types.SelectAllProducts, { selected });

    return { selected };
  },
  clearProducts({ commit }) {
    commit(types.ClearProducts);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
