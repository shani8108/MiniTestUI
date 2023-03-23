import { useState, useEffect } from 'react';
import axios from 'axios';
import { variables } from '../Variable';

function QuantityOfUnit() {

    const [arrVal, setArrVal] = useState([{}]);
    const modelName = 'QuantityPerUnit';

    const getQuantityOfUnit = async () => {
        await axios
            .get(variables.API_URL + modelName + '/GetQuantityOfUnit')
            .then((res) => {
                console.log(res);
                setArrVal(res?.data);
            })
            .catch((err) => {
                console.log(err);
                alert('Failed')
            });
    };

    useEffect(() => {
        getQuantityOfUnit();
        //debugger
        //Runs only on the first render
        //get Department details:

    }, []);


    return (
        <div>
            <h2>Quantity of units for each type of packaging</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Content Type</th>
                        <th>Count Product</th>
                    </tr>
                </thead>
                <tbody>
                    {arrVal.map((i, index) => {
                        return (
                            <tr key={index}>
                                <td>{i?.ContentType}</td>
                                <td>{i?.Unit}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default QuantityOfUnit;