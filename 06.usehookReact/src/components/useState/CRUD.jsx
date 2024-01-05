import React, { useState } from 'react';

const CRUD = () => {
    const [state, setState] = useState({
        fname: '',
        age: 0,
        email: '',
        dates: '',
        description: '',
    });

    const [data, setData] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);

    const createItem = () => {
        setData((prevData) => [...prevData, { ...state, id: Date.now() }]);
        setState({
            fname: '',
            age: 0,
            email: '',
            dates: '',
            description: '',
        });
    };

    const updateItem = () => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === editingItemId ? { ...item, ...state } : item
            )
        );
        setEditingItemId(null);
        setState({
            fname: '',
            age: 0,
            email: '',
            dates: '',
            description: '',
        });
    };

    const deleteItem = (id) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const selectedItem = data.find((item) => item.id === id);
        setEditingItemId(id);
        setState(selectedItem);
    };

    const ChangeState = (e) => {
        const { name, value } = e.target;
        setState((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    return (
        <>
            <input
                type="text"
                name="fname"
                value={state.fname}
                onChange={ChangeState}
                placeholder="Enter your name"
            />
            <br />
            <input
                type="number"
                name="age"
                value={state.age}
                onChange={ChangeState}
                placeholder="Enter your age"
            />
            <br />
            <input
                type="email"
                name="email"
                value={state.email}
                onChange={ChangeState}
                placeholder="Enter your email"
            />
            <br />
            <input
                type="date"
                name="dates"
                value={state.dates}
                onChange={ChangeState}
                placeholder="Enter your date"
            />
            <br />
            <textarea
                name="description"
                value={state.description}
                onChange={ChangeState}
                placeholder="Enter your description"
            ></textarea>
            <br />
            {editingItemId ? (
                <button onClick={updateItem}>Update</button>
            ) : (
                <button onClick={createItem}>Create</button>
            )}
            <br />
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.fname} - {item.age} - {item.email} - {item.dates} - {item.description}
                        <button onClick={() => editItem(item.id)}>Edit</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CRUD;
