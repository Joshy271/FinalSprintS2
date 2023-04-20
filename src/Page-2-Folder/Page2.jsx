import React, { useState } from "react";

function Page2() {
  function TitleAndBackground() {
    return (
      <>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
        </style>
        <div class="Title">
          <h1>Chore Champions</h1>
        </div>
        <div className="Img-1">
          <img src="./Images/PencilPaper.png" alt="" height="110px" />
        </div>
        <div class="Img-2">
          <img
            src="./Images/image_2023-04-11_132205969-removebg-preview.png"
            alt=""
            height="220px"
          />
        </div>
      </>
    );
  }
  function CreateTask() {
    const [chore, setChore] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [choresList, setChoresList] = useState([]);

    const handleChoreChange = (event) => {
      setChore(event.target.value);
    };

    const handleDueDateChange = (event) => {
      setDueDate(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const newChore = {
        chore,
        dueDate,
        id: Math.random(),
      };
      setChoresList([...choresList, newChore]);
      setChore("");
      setDueDate("");
    };

    const handleDelete = (index) => {
      const updatedChoresList = [...choresList];
      updatedChoresList.splice(index, 1);
      setChoresList(updatedChoresList);
    };

    return (
      <div>
        <h1 className="Block">Chore Maker</h1>
        <form onSubmit={handleSubmit}>
          <h1 className="ChoreBoxTitle">Chore</h1>
          <label className="ChoreBox">
            <input type="text" value={chore} onChange={handleChoreChange} />
          </label>
          <h1 className="DateInput">Completion Date</h1>
          <label className="DateDue">
            <input
              type="datetime-local"
              value={dueDate}
              onChange={handleDueDateChange}
            />
          </label>
          <button className="SubmitBtn" type="submit">
            Submit
          </button>
        </form>
        <h1 className="ChoreList">Chore List</h1>

        <ul>
          {choresList.map((chore, index) => (
            <li className="ChoreItems" key={chore.id}>
              {chore.chore} - Due: {chore.dueDate}
              <button
                className="DeleteBtn"
                onClick={() => handleDelete(index)}
                style={{ top: `${index * 50}px` }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div>
        <TitleAndBackground />
      </div>
      <div>
        <CreateTask />
      </div>
    </>
  );
}
export default Page2;
