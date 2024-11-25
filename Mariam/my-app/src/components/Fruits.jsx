import Fruit from "./Fruit";

export default function Fruits (){

        //const fruits =["Apple","Orange","Lemon","Pinapple"];
    const fruit = [
        {name: "Apple", price : 10, emoji: "🍎" , soldout : true},
        {name: "Orang", price : 40, emoji: "🟠", soldout : true},
        {name: "Orang", price : 40, emoji: "🟠" ,soldout : false,},
        {name: "Lemon", price : 15, emoji: "🍋" ,soldout : true},
        {name: "Pinapple", price : 90, emoji: "🍍", soldout : false},
    ];


    return (
        <div>
            <ul>
        {fruit.map((fruit) => (
            <Fruit
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              emoji={fruit.emoji}
              soldout={fruit.soldout}
            /> 
        ))}
           </ul>
        </div>
    
    );
}
    