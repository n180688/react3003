import React, { useState } from 'react';

const  arr =[{

    'id' :  1,
    'description' :  "Висит груша, нельзя скушать",
    'option1' :  "Груша",
    'option2' : "Нельзя? А я проверю",
    'option3' : "Лампочка",
    'correct' : "Лампочка"
    },
    {
    'id' :  2,
    'description' :  "Не лает, не кусает, а в дом не пускает",
    'option1' :  "Собака",
    'option2' :  "Замок",
    'option3' :  "Немая беззубая собака?",
    'correct' :  "Замок"
   },
   {
    'id' : 3,
    'description' : "Желтый, кислый, кладут в чай",
    'option1' : "Лимон",
    'option2' : "Антон",
    'option3' : "Картон",
    'correct' : "Лимон"
    }
];


function Item() {

 return( <>

	{arr.map( (i)=>{

        return(
<div className="riddleCard">
        <h1>Загадка #{i.id}</h1>
        <p>{i.description}</p>

	<div className="answers">
       <label> {i.option1} 
        <input type="radio"
        name = {0 + i. id} value = {i.option1} />
        </label>
	

        <label> {i.option2}
        <input type="radio"
        name = {0 + i. id}  value = {i.option2} />
        </label>
	

        <label> {i.option3}
        <input type="radio"
         name = {0 + i. id} value = {i.option3} />
        </label>

</div>

<p>Правильный ответ: <b> {i.correct}</b></p>
</div>
)
}
)

}
	</>
)
};

export default Item


