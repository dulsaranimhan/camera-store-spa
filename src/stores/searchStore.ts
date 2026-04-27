import { defineStore } from "pinia"

export const useSearchStore = defineStore("search", {
  state: () => ({
    keyword: ""
  }),

  actions: {
    setSearch(value: string) {
      this.keyword = value
    }
  }
})