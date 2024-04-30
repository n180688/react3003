
import './App.css';
import Item from './components/Item';
import ItemAddForm from './components/ItemAdd';
import React, { useState } from "react";

function App() {
  const [itemArray, setItemArray] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});

  const handleFormSubmit = (formData) => {
    setItemArray([...itemArray, formData]);
  };

  const handleOptionChange = (itemId, option) => {
    setUserAnswers({ ...userAnswers, [itemId]: option });
  };

  const pageContent = itemArray.map((item, index) => {
    const userAnswer = userAnswers[index];

    return (
      <div key={index} className = "riddleCard">
	<h1> Загадка </h1>
        <p>{item.description}</p>

        <div className="options">
          <div>
            <input
              id={`option-1-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option1}
              onChange={() => handleOptionChange(index, item.option1)}
            />
            <label htmlFor={`option-1-${index}`}>{item.option1}</label>
          </div>

          <div>
            <input
              id={`option-2-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option2}
              onChange={() => handleOptionChange(index, item.option2)}
            />
            <label htmlFor={`option-2-${index}`}>{item.option2}</label>
          </div>

          <div>
            <input
              id={`option-3-${index}`}
              type="radio"
              name={`option${index}`}
              checked={userAnswer === item.option3}
              onChange={() => handleOptionChange(index, item.option3)}
            />
            <label htmlFor={`option-3-${index}`}>{item.option3}</label>
          </div>

        </div>
      </div>
    );
  });
  return (
    <>
      <Item/>
      <ItemAddForm onFormSubmit={handleFormSubmit} />
        {pageContent}
    </>
  );
}

export default App;
