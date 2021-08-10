import React, {useContext} from 'react'
import { GlobalKontex } from '../Kontex/GlobKon/GlobalKontex';

const Material = ({cislovporadi,name,eventklik}) => {
    const {zmenSurovinu} = useContext(GlobalKontex);
    return (
        <div>
            {cislovporadi} - {name}
            <div className="btn" onClick={() => {
                zmenSurovinu(name);
                eventklik(name);
            }}>Zobrazit detail</div>
        </div>
    )
}

export default Material
