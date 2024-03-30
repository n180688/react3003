
const Item = ()=>{
 const arr =[{

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
        'description' : "Желтый, кислый, кладут в чай. Его медом заливай. При простуде нужен он, А зовут его...",
        'option1' : "Лимон",
        'option2' : "Антон",
        'option3' : "Картон",
        'correct' : "Лимон"
    }
];

    const content = arr.map(
       (i)=>{
     return(
        <>
        <h1>Загадка #{i.id}</h1>
        <p>{i.description}</p>

	<label> {i.option1}
        <input type="radio" name = {0 + i. id} value = {i.option1} />
        </label>
	
	<label> {i.option2}
         <input type="radio" name = {0 + i. id}  value = {i.option2} />
        </label>
	
	
	<label> {i.option3}
	<input type="radio" name = {0 + i. id} value = {i.option3} />
	</label>
	<p>Правильный ответ: <b> {i.correct}</b></p>
        </>
     )
})




  return(
        content
    )}


export default Item

