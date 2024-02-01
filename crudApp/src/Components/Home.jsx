import React, { useState } from "react";

const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, inputs]);
        //here setInputs function is updated with empty values it helps to 
        //clear all the input value in input feild when the add button is clicked!
        setInputs({
            name: "",
            email: "",
            phone: ""
        });
    };

    const handleEdit=(index)=>{
        const editdata=tableData[index];
        setInputs({
            name:editdata.name,
            email:editdata.email,
            phone:editdata.phone
        })
    }

    const handleDelete=(index)=>{
        const updateData=[...tableData];
        updateData.splice(index,1);//splice delete the element in specific index and here 1 is the delete count which means how many elemt is to be deleted from that index.and this method overwrites on the orginal array
    setTableData(updateData);
    }
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col justify-center items-center p-4 mt-6 shadow-lg w-1/2 h-1/2 mx-auto">
                <h1 className="font-bold text-2xl">Crud App</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4 flex flex-col items-center">
                        <label>Name</label>
                        <input
                            name="name"
                            value={inputs.name}
                            type="text"
                            placeholder="name"
                            className="bg-gray-100 rounded p-1 ml-2"
                            onChange={handleChange}
                        />

                        <label className="ml-2">Email</label>
                        <input
                            name="email"
                            value={inputs.email}
                            type="text"
                            placeholder="email"
                            className="bg-gray-100 rounded p-1 ml-2"
                            onChange={handleChange}
                        />
                        <label className="ml-2">Phone Number</label>
                        <input
                            name="phone"
                            value={inputs.phone}
                            type="text"
                            placeholder="phone"
                            className="bg-gray-100 rounded p-1 ml-2"
                            onChange={handleChange}
                        />
                        <div>
                            <button
                                type="submit"
                                className="mt-5 rounded bg-black text-white p-2"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <table className="w-full shadow-sm mx-auto mt-5">
    <thead className="bg-black text-white text-center font-bold p-4">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {tableData.map((item, index) => (
            <tr key={index}>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.email}</td>
                <td className="text-center">{item.phone}</td>
                <td className="text-center">
                    <button onClick={() => handleEdit(index)} className="bg-white text-yellow-600 w-10 rounded">
                        Edit
                    </button>
                    <button onClick={() => handleDelete(index)} className="bg-white text-red-500 w-14 rounded">
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

         

           
        </div>
    );
};

export default Home;
