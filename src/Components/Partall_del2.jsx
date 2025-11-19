import React, { useState} from 'react';

function Partall_del2() {
    const [result, setResult] = useState('');
    const number = [76, 93, 72, 10, 55, 42, 89, 30, 11, 3, 18, 90 , 27];

    const checkNumber = () => {
        const filteredNumbers = number.filter(num => num % 2 === 0 );
        setResult(filteredNumbers);
        
    };
 
    return (
        <div>
            <h2>Pertall sjekker</h2>
            <button onClick={checkNumber}>sjekk</button>
            {result.length > 0 && ( <p>Even numbers in the Array: {result.join(', ')}</p>)}
        </div>
    );
}

export default Partall_del2;