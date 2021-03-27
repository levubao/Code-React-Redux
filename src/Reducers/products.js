var initialState=[
    {
        id:1,
        name:"Iphone 7 plus",
        image:'',
        description:'Product of apple',
        price:500,
        inventory:10,
        rating:0,
    },
    {
        id:2,
        name:"Iphone 8 plus",
        image:'',
        description:'Product of apple 1',
        price:600,
        inventory:20,
        rating:4,
    },
    {
        id:3,
        name:"Iphone 6 plus",
        image:'',
        description:'Product of apple 4',
        price:400,
        inventory:15,
        rating:3,
    }
];
const products=(state=initialState,actions)=>{
    switch(actions.type){
        default: return [...state];
    }
}
export default products;
