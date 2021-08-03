import React, {useState} from 'react'

const PridejMaterial = () => {
    const [vstupUzivatele, setvstupUzivatele] = useState("")
    const vlozeniDoDB = () => {
        fetch("http://localhost:5000/save-material",{
            method:"post",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({name:vstupUzivatele})
        }).then((data) => {
            return data.json();
        }).then((finalData) => {
            console.log(finalData.msg);
            setvstupUzivatele("");
        })
    }
    return (
        <div>
            <input type="text" value={vstupUzivatele} onInput={(e) => {
                setvstupUzivatele(e.target.value);
            }}/>
            <div className="btn" onClick={vlozeniDoDB}>Vložit material</div>
        </div>
    )
}

export default PridejMaterial
