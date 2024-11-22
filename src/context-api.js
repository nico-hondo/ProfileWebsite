import { createContext, useReducer } from "react";

//membuat context
export const ThemeContext = createContext();

//inisialisasi state awal dengan membaca dari localstorage
const INITIAL_STATE = {
    darkMode : JSON.parse(localStorage.getItem("darkMode")) || false,
};

//reducer untuk mengelola perubahan state;
const themeReducer = (state, action) =>{
    switch(action.type) {
        case "TOGGLE":
            const newDarkModeState = !state.darkMode;
            //saat pengguna mengubah tema dengan menggunakan dispatch({type: "TOGGLE"}), maka state darkMode diperbaharui. Nilai baru langsung disimpan ke localstorage dengan
            localStorage.setItem("darkMode", JSON.stringify(newDarkModeState));
            return {darkMode: newDarkModeState};
        default:
            return state;
    }
};

// provider untuk membungkus aplikasi
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return(
        <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    )
}