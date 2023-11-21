import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
    state = {
        input: "",
        items: [],
        editIndex: -1, // Track the index of the item being edited
    };

    handleChange = (event) => {
        this.setState({
            // [event.target.name]: event.target.value //([event.target.name] this using in the case of more input field)
            input: event.target.value,
        });

        console.log(this.state.input);
    };

    storeItems = (event) => {
        event.preventDefault(); // this function help to avoid browser refreshing ;

        const { input, editIndex } = this.state;
        if (input.trim() === "") {
            // If the input is empty or contains only whitespace, don't add it
            return;
        }

        if (editIndex !== -1) {
            const updateItems = [...this.state.items];
            updateItems[editIndex] = input;
            this.setState({
                items: updateItems,
                input: "",
                editIndex: -1,
            });
        } else {
            this.setState({
                items: [...this.state.items, input],
                input: "",
            });
        }
    };

    deleteItem = (key) => {
        console.log(key, this.state.items[key]);

        // Advanced way
        this.setState({
            items: this.state.items.filter((data, index) => index !== key),
        });
    };

    editItem = (key) => {
        const selectedItem = this.state.items[key];

        this.setState({
            input: selectedItem,
            editIndex: key,
        });

    };

    clearItem = () =>{
        this.setState({
            items : []
        })
    }

    render() {
        const { input, items, editIndex } = this.state;

        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>

                    <input
                        type="text"
                        value={input}
                        onChange={this.handleChange}
                        placeholder={editIndex !== -1 ? "Enter Edit Item..." : "Enter Items..."}
                    />
                    <button className="addButton" onClick={this.storeItems}>
                        {editIndex !== -1 ? "EDIT" : "ADD"}
                    </button>
                    <button className="addButton" onClick={this.clearItem}>Clear</button>
                </form>
                <ul>
                    {items.map((data, index) => (
                        <li key={index}>
                            {data}
                            <i className="fa-solid fa-pen-to-square" onClick={() => this.editItem(index)}></i>
                            <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
