import { create } from "zustand";

interface pijamaCard {
  id: number
  capa?: string
  nome?: string
  preco: number
  precoAntigo?: number
  desconto: boolean
}

interface favoritosStore {
  favoritos: pijamaCard[]
  addToFavoritos: (item: pijamaCard) => void
  removeFromFavoritos: (id: number) => void
}

const useFavoritosStore = create<favoritosStore>((set) => ({
  favoritos: [],

  addToFavoritos: (item) =>
    set((state) => ({
      favoritos: [...state.favoritos, item],
    })),

  removeFromFavoritos: (id) =>
    set((state) => ({
      favoritos: state.favoritos.filter((item) => item.id !== id),
    })),
}))

export default useFavoritosStore