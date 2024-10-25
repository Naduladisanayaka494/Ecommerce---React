import Header from "./Header";
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    async function deleteOperation(id) {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData();
    }
    async function getData() {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result)
      }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Operations</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                            <td><span onClick={()=>deleteOperation(item.id)} className="delete">Delete</span></td>
                            {/* Adjust based on your data structure */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductList;
