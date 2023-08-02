import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    function addFavorite(id) {
        setFavorites((fav) => [...fav, id])
    }

    function removeFavorite(id) {
        setFavorites((fav) => favorites.filter(x => x !== id))
    }

    const value = {
        ids: favorites,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;