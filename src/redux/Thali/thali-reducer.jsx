const initial_State = {
  products: [
    {
      id: 1,
      Name: "Chapati",
      Price: 30,
      Description:
        "A round flat unleavened bread of India that is usually made of whole wheat flour and cooked on a griddle.",
      Image:
        "https://zaykarecipes.com/wp-content/uploads/2017/02/soft-roti-recipe.jpg"
    },
    {
      id: 2,
      Name: "Jeera-Rice",
      Price: 160,
      Description:
        "Jeera rice is a popular fried rice dish having the flavour of cumin that’s easy to make and goes well with any Indian side dish or gravy.",
      Image:
        "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-2.jpg?fit=1200,9999"
    },

    {
      id: 3,
      Name: "Paneer-ButterMasala",
      Price: 280,
      Description:
        "Paneer Butter Masala is one of India’s most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time.",
      Image:
        "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?w=1612&quality=65&strip=all&ssl=1"
    },
    {
      id: 4,
      Name: "Mango-Pickle",
      Price: 10,
      Description:
        "Mango pickle is a traditional Indian condiment usually prepared with raw mangoes, ingredients and oil.It goes well with dal-rice, dal-roti, parathas and even with different snacks.",
      Image:
        "https://i0.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2016/12/mango-pickle-recipe-step-by-step-instructions-7.jpg?fit=1490%2C1166&ssl=1"
    },

    {
      id: 5,
      Name: "Misti-Doi",
      Price: 50,
      Description:
        "Mishti doi is a classic Bengali sweet made with milk, curd culture and jaggery or sugar. The jaggery used traditionally to make mishti doi is palm jaggery.",
      Image:
        "https://hellolife4u.com/wp-content/uploads/2020/09/CURD2-1050x675.jpg"
    },
    {
      id: 6,
      Name: "Masoor-Daal",
      Price: 190,
      Description:
        "Masoor Dal is a popular lentil based dish from the North Indian Cuisine and is often made in Indian homes.",
      Image:
        "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/15-feb/Dhaba_Style_Dal_Fry_Recipe-1.jpg"
    },
    {
      id: 7,
      Name: "Gulab-Jamun",
      Price: 120,
      Description:
        "These soft sugar syrup soaked balls are a treat always. Sometimes to satisfy your sweet cravings, we making Gulab jamun.",
      Image:
        "https://www.lieferando.de/foodwiki/uploads/sites/8/2017/05/gulab-jamun-5-1080x881.jpg"
    }
  ],
  cart: [],
  currentitem: null
};

const thalireducer = (state = initial_State, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //get item in cart
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, Qty: item.Qty + 1 }
                : item
            )
          : [...state.cart, { ...item, Qty: 1 }]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    case "ADJUST_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, Qty: +action.payload.Qty }
            : item
        )
      };
  
    default:
      return state;
  }
};

export default thalireducer;
