import { defineStore } from "pinia";

type account = {
  name: string;
  surname: number;
  email: string;
  password: string;
  googleId: string | null;
};

export const useAccountStore = defineStore("account", {
  state: () => ({
    accounts: [] as account[],
    loginInuser: null as account | null,
  }),

  actions: {
    signup(account: account) {
      this.accounts.push(account);
    },
    login(email: string) {
      const HasAccount = this.accounts.some((item) => item.email === email);

      if (!HasAccount) {
        return;
      }

      const user = this.accounts.find((item) => item.email === email);
      if (user) {
        this.loginInuser = user;
      }
    },

    logout() {
      this.loginInuser = null;
    },
  },
});
