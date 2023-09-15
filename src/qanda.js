import { useState } from "react"
import QandA from "./App"

const Accordian = (props) => {
    const qsandas = props.qsandas;

    // create an array using .map that sets the expand state for each q to false
    const [expanded, setExpanded] = useState(qsandas.map(() => false));

    // Function to handle the expansion of a specific question
    const handleExpand = (index) => {
        // Create a copy of the current expanded state array
        const newExpanded = [...expanded];
        // Toggle the expanded state for the clicked question
        newExpanded[index] = !newExpanded[index];
        // Update the state with the new expanded state
        setExpanded(newExpanded);
    };

    return (
        <div className='faq'>
            <h2>Frequently Asked Questions</h2>
            {qsandas.map((qanda, index) => (
                <div className='question' key={qanda.id}>
                    <h4>{qanda.question}</h4>
                    <p>{expanded[index] ? qanda.answer : '' }</p>
                    <button onClick={() => handleExpand(index)}>Expand</button>
                </div>
            ))}
        </div>
    );
}

export default Accordian