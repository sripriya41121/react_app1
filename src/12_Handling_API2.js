import React, {useState} from "react";

const HandlingAPI2 = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    };
    
    const submitHandler =(e) => {
        e.preventDefault();
        //fetch("https://samplesri-e846f-default-rtdb.firebaseio.com/data.json", {
            fetch("https://sample-demo-41216-default-rtdb.firebaseio.com/data.json", {
                method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
        .then((res) => alert("data posted"))
        .catch((err) => console.log(err));
    };
    return(
        <div>
    <center>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <br />
            <input type="text" name="name" onChange={changeHandler} />
            <br />
            <label>Age</label>
            <br />
            <input type="text" name="age" onChange={changeHandler} />
            <br />
            <input type="submit" value="PostData" />
        </form>
    </center>
</div>
    );
};
export {HandlingAPI2};