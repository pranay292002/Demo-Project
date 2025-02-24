import { createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        productList: [],
        filterdList:[],
        loading:false,
        error:null
    },

    reducers:{
        setProducts: (state, action) => {
            state.loading = true
        },
        getProducts: (state, action) => {
            if(Array.isArray(action.payload)){
                state.productList = action.payload
                state.filterdList = action.payload
                
            }else{
                state.error = action.payload
            }
            state.loading =false
        },
        filterProducts: (state,action)=>{
            const query = action.payload
            state.filterdList = state.productList.filter((product)=>product.title.toLowerCase().includes(query))
        }
    }
})

export const { setProducts , getProducts, filterProducts} = productSlice.actions;
export default productSlice.reducer;