import { useState, useEffect } from 'react';
import axios from 'axios';
import { variables } from '../Variable';


function QuantityPerUnit() {


    const [arrVal, setArrVal] = useState([{}]);
    const modelName = 'QuantityPerUnit';

    const getQuantityPerUnit = async () => {
        await axios
            .get(variables.API_URL + modelName + '/GetQuantityPerUnit')
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
        getQuantityPerUnit();
        //debugger
        //Runs only on the first render
        //get Department details:

    }, []);

    return (
        <div>
            <h2>Quantity of products according to packaging types </h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Content Type</th>
                        <th>Sum Unit</th>
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

export default QuantityPerUnit;