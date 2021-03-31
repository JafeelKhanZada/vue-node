/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from "vuex";
import useFetch from "../config/useFetch";
const CALCULATED_SUM = "CALCULATED SUM [SUM][CALCULATOR]";
type State = {
  sum: number;
};
interface Obj {
  number1: number;
  number2: number;
}
const state: State = {
  sum: 0,
};
const actions = {
  async calculateSum({ commit }: { commit: any }, values: Obj): Promise<any> {
    const request = await useFetch.post("/calculate", values);
    if (request?.data) {
      commit(CALCULATED_SUM, request?.data?.sum);
    }
  },
};
const mutations = {
  [CALCULATED_SUM]: (state: State, payload: number) => (state.sum = payload),
};
const getters = {
  getSum(state: State): number {
    return state.sum;
  },
};
export const store = createStore({ state, mutations, actions, getters });
