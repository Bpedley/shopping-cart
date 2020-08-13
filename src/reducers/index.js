import { ADD_ITEM, INCREMENT, DECREMENT, REMOVE_ITEM } from "../actions/types";

const initialState = {
  data: [
    {
      id: 1,
      title: "Google Pixel - Black",
      img: "/images/product-1.png",
      price: 250.9,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 2,
      title: "Samsung S7",
      img: "/images/product-2.png",
      price: 175.85,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 3,
      title: "HTC 10 - Black",
      img: "/images/product-3.png",
      price: 82.61,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 4,
      title: "HTC 10 - White",
      img: "/images/product-4.png",
      price: 201.1,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 5,
      title: "HTC Desire 626s",
      img: "/images/product-5.png",
      price: 134.99,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 6,
      title: "Vintage Iphone",
      img: "/images/product-6.png",
      price: 199.16,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 7,
      title: "Iphone 7",
      img: "/images/product-7.png",
      price: 123.82,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    },
    {
      id: 8,
      title: "Iphone 8",
      img: "/images/product-8.png",
      price: 39.11,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      count: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
    case INCREMENT:
    case DECREMENT:
    case REMOVE_ITEM:
      const itemIndex = state.data.findIndex(i => payload === i.id);
      const newCount =
        type === REMOVE_ITEM
          ? 0
          : type === DECREMENT && state.data[itemIndex].count > 1
          ? state.data[itemIndex].count - 1
          : type === INCREMENT
          ? state.data[itemIndex].count + 1
          : type === ADD_ITEM
          ? 1
          : state.data[itemIndex].count;
      return {
        ...state,
        data: [
          ...state.data.slice(0, itemIndex),
          {
            ...state.data[itemIndex],
            count: newCount
          },
          ...state.data.slice(itemIndex + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
