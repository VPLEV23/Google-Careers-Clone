import { createPinia, setActivePinia } from "pinia";
import { useUserStore } from "../../../src/stores/user";

describe("stae", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("keeps track or if user loged in", () => {
    const store = useUserStore;
    expect(store.isLoggedIn).toBe(false);
  });
});

describe("action", () => {
  it("loginUser", () => {
    const store = useUserStore();
    store.loginUser();
    expect;
    store.isLoggedIn.toBe(true);
  });
});
