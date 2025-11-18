import { useState } from "react";

function Partall() {
    const [number, setNumber] = useState(""); // Input for tall
    const [result, setResult] = useState(""); // Resultat
    
    const handleInputChange = (e) => {
        setNumber(e.target.value);
        setResult(""); // Tilbakestill resultat ved inputendring
    };

    const checkNumber = () => {
        const num = parseInt(number);

        if (isNaN(num)){ 
            setResult('Please enter a valid number.');
        } else if (num % 2 === 0) {
            setResult('${num} er et partall.');
        } else {
            setResult('${num} er et oddetall.');
        }
    }
}