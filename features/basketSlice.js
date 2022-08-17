import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
           const lastIndex = state.items.findIndex(item => item._id === action.payload._id)
           if(lastIndex >=0 ){
                state.items.splice(lastIndex,1)
           }else{
            console.warn(`Cant remove product id: ${action.payload._id} as its not in the basket`)
           }
        },
        removeItemFromBasket: (state, action) => {
           // console.log(action.payload._id)
            state.items = state.items.filter(item => item._id !== action.payload._id)
        }
    }
})

const groupItems = items => {
    return items.reduce((prev, curr) => {
        const item = prev.find(i => i._id === curr._id);
        if (item) {
            item.quantity = item.quantity + 1;
        }
        else {
            prev.push({ ...curr, quantity: 1 });
        }
        return prev;
    }, [])
}

export const {addToBasket, removeFromBasket, groupedItems, removeItemFromBasket } = basketSlice.actions

export const selectBasketItems = state => state.basket.items
export const groupedBasketItems = state => groupItems(state.basket.items)
export const selectBasketTotal = state => state.basket.items.reduce((p,c) => p+c.price, 0).toFixed(2)

export default basketSlice.reducer