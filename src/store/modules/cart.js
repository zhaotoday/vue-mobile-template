import helpers from "jt-helpers";

const types = helpers.keyMirror({
  UpdateProductNumber: null,
  SelectProduct: null,
  SelectAllProducts: null,
});

const state = {
  products: [],
};

const getters = {
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

    return (
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
  [types.SelectAllProducts](state, { product }) {
    product.selected = !product.selected;
  },
};

const actions = {
  updateProductNumber({ commit }, { product, number }) {
    commit(types.UpdateProductNumber, { product, number });
    return { product, number };
  },
  selectProduct({ commit }, { product }) {
    commit(types.SelectAllProducts, { product });
    return { product };
  },
  selectAllProducts({ commit, getters }) {
    commit(types.SelectAllProducts, { selected: !getters.allProductsSelected });
    return null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
