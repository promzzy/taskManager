import store from "./index";

export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch