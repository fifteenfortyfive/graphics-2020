import _ from "lodash";

import { StoreState } from "../../Store";

export const getAccounts = (state: StoreState) => Object.values(state.accounts);
export const getAccount = (state: StoreState, props: { accountId?: string }) =>
  props.accountId != null ? state.accounts[props.accountId] : undefined;
