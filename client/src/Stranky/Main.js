import React, {useState, useEffect} from 'react'
import Material from '../Komponenty/Material';


const Main = () => {

    const [materialy, setMaterialy] = useState([]);
    const [serverMsg, setServerMsg] = useState("");
    const [kliknutoUzivatelem, setkliknutoUzivatelem] = useState("")

    useEffect(() => {
        pridaniMatrose()
    }, [])

    const pridaniMatrose = async () =>{
        setServerMsg("Načítám");
        setMaterialy([]);
        const data = await fetch("http://localhost:5000/get-materials");
        const finalData = await data.json();
        const {msg,documents} = finalData;
        setMaterialy(documents);
        setServerMsg(msg);
    }

    const kliknuto = (material) => {
        setkliknutoUzivatelem(material);
    }
    return (
        <div>
            {
                materialy.map((material,index) => {
                    return(
                        <Material eventklik={kliknuto} key={index} name={material.name} cislovporadi={index+1}/>
                    )
                })
            }
            <div className="btn">{serverMsg}</div>
            {kliknutoUzivatelem}
        </div>
    )
}

export default Main
