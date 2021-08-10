import React, {createContex, useReducer} from "react";
import GlobalReducer from "./GlobalReducer";

const hlavniState = {
    surovina:"kačer"
};

export const GlobalKontex = createContex(hlavniState);
export const GlobalProvider = ({deti}) => {
    const [state, dispatch] = useReducer(GlobalReducer, hlavniState);


    return(
        <GlobalKontex.Provider
            value={{
                surovina:state.surovina
            }}
        >
            {deti}
        </GlobalKontex.Provider>
    );
};