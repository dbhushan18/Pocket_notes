import foodData from "./food.json" assert { type: 'json' };;

//list all the food items
function Fooditem(food){
    return food.map(item=>item.foodname);
}
//console.log("All the food items: ",Fooditem(foodData));

//list all the food items with category vegetables
function CatVegetables(food){
    return food.filter(item=>item.category==='Vegetable').map(item=>item.foodname);
}
console.log("Vegetables: ",CatVegetables(foodData));

//list all the food items with category fruit
function CatFruit(food){
    return food.filter(item=>item.category==='Fruit').map(item=>item.foodname);
}
console.log("Fruits: ",CatFruit(foodData));

//list all the food items with category protien
function CatProtein(food){
    return food.filter(item=>item.category==="Protein").map(item=>item.foodname);
}
console.log("Protein: ",CatProtein(foodData));

//list all the food items with category nuts
function CatNut(food){
    return food.filter(item=>item.category==='Nuts').map(item=>item.foodname);
}
console.log("Nuts: ",CatNut(foodData));

//list all the food items with category grains
function CatGrains(food){
    return food.filter(item=>item.category==='Grain').map(item=>item.foodname);
}
console.log("Grains: ",CatGrains(foodData));

//list all the food items with category dairy
function CatDairy(food){
    return food.filter(item=>item.category==='Dairy').map(item=>item.foodname);
}
console.log("Dairy: ",CatDairy(foodData));

//list all the food items with calorie above 100
function CalAbove(food){
    return food.filter(item=>item.calorie>100).map(item=>item.foodname);
}
console.log("Food items with calorie above 100: ",CalAbove(foodData));

//list all the food items with calorie below 100
function CalBelow(food){
    return food.filter(item=>item.calorie<100).map(item=>item.foodname);
}
console.log("Food items with calorie below 100: ",CalBelow(foodData));

//list all the food items with highest protien content to lowest
function SortProtein(food){
    return food.sort((a,b)=> b.protiens-a.protiens).map(item=>item.foodname);
}
console.log("food items with highest protien content to lowest: ",SortProtein(foodData));

//list all the food items with lowest cab content to highest
function SortCab(food){
    return food.sort((a,b)=>a.cab-b.cab).map(item=>item.foodname);
}
console.log("food items with lowest cab content to highest: ",SortCab(foodData));
