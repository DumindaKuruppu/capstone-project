import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider ({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        // Get the data from the API
        // Save the data to the state
        fetch(URL)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, []);

    function toggleFavorite (id) {
        const updatedArray = allPhotos.map(photo => {
            if (photo.id === id) {
                // console.log(id)
                // console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo;
        })

        setAllPhotos(updatedArray);
    }

    function addToCart (newItem) {
        setCartItems(prevItems => [...prevItems, newItem]);
    }

    function removeFromCart (id) {
        setCartItems(prevItems => prevItems.filter(item => item !== id));
    }

    console.log(cartItems);

    // console.log(allPhotos);

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};