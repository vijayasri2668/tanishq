import React,{useState,createContext} from 'react'
export const UserContext =createContext();
const Category = (props) => {
    const [category] = useState([

         {
        
              id: "1",
        
              category: "jwellery",
        
              img:"https://staticimg.titan.co.in/Tanishq/Catalog/501720SDIAAA00_1.jpg?impolicy=pqmed&imwidth=640",
              price: "38429/-",
              name:'TRY ON AVAILABLE',
              description: "Round Nature Inspired jwell",
        
            },
        
            {
        
              id: "2",
        
              category: "jwellery",
        
              img: "https://staticimg.titan.co.in/Tanishq/Catalog/504002SXDABA02.jpg?impolicy=pqmed&imwidth=640",
        
              price: "56784/-",
              name:'TRY ON AVAILABLE',
        
              description: "Rose gold and Diamonds",
        
            },
        
            {
        
              id: "3",
        
              category: "jwellery",
        
              img: "https://staticimg.titan.co.in/Tanishq/Catalog/500073DRAABA32_1.jpg?impolicy=pqmed&imwidth=640",
        
        
              price: "66099/-",
              name:'TRY ON AVAILABLE',
        
              description: "Diamond and perl jwellery",
        
            },
        
            {
        
              id: "4",
        
              category: "jwellery",
        
              img: "https://staticimg.titan.co.in/Tanishq/Catalog/503520DBFABA00_1.jpg?impolicy=pqmed&imwidth=640",
        
        
              price: "99989/-",
              name:'TRY ON AVAILABLE',
        
              description: "Radiant pure gold jwellery",
        
            },
        
            {
        
              id: "5",
        
              category: "jwellery",
        
              img: "https://staticimg.titan.co.in/Tanishq/Catalog/513919DPOABA00_1.jpg?impolicy=pqmed&imwidth=640",
        
              
        
              price: "34092/-",
              name:'TRY ON AVAILABLE',
        
              description: "Contemporary gold buttas",
           },
           {
        
            id: "6",
      
            category: "jwellery",
      
            img: "https://staticimg.titan.co.in/Tanishq/Catalog/511819DKCABA00.jpg?impolicy=pqmed&imwidth=640",
      
            
      
            price: "21097/-",
            name:'TRY ON AVAILABLE',
      
            description: "Beautiful gold Earrings",
           },
          {
        
           id: "7",
  
           category: "jwellery",
  
           img: "https://staticimg.titan.co.in/Tanishq/Catalog/511920SDHABA00.jpg?impolicy=pqmed&imwidth=640",
  
        
  
           price: "28905/-",
           name:'TRY ON AVAILABLE',
  
           description: "Chand gold studs",
         },
         {
        
           id: "8",

           category: "jwellery",

           img: "https://staticimg.titan.co.in/Tanishq/Catalog/50F1D1SFRADA02_1.jpg?impolicy=pqmed&imwidth=640",

    

           price: "24609/-",
           name:'TRY ON AVAILABLE',

           description: "Gold and Diamond Studs",
        },
        {
        
          id: "9",

          category: "jwellery",

          img: "https://staticimg.titan.co.in/Tanishq/Catalog/502994SGIADA09_1.jpg?impolicy=pqmed&imwidth=640",

    

          price: "45087/-",
          name:'TRY ON AVAILABLE',

          description: "Unique square studs",
        },
        {
        
          id: "10",

          category: "jwellery",

          img: "https://staticimg.titan.co.in/Tanishq/Catalog/501169SDHAAA29_1.jpg?impolicy=pqmed&imwidth=640",

    

          price: "34789/-",
          name:'TRY ON AVAILABLE',

         description: "Ruby and gold studs",
       },
       {
        
        id: "11",

        category: "jwellery",

        img: "https://staticimg.titan.co.in/Tanishq/Catalog/55D1I2SOZAAA29_1.jpg?impolicy=pqmed&imwidth=640",

    

        price: "45789/-",
        name:'TRY ON AVAILABLE',

        description: "Gold and perl ear studs",
      }, 
      {
        
        id: "12",

        category: "jwellery",

        img: "https://staticimg.titan.co.in/Tanishq/Catalog/511170FCBAAP5_1.jpg?impolicy=pqmed&imwidth=640",

    

        price: "98989/-",
        name:'TRY ON AVAILABLE',

        description: "unique ladies finger ring",
      },
      {
        
    id: "13",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/502219FCLAAP4_1.jpg?impolicy=pqmed&imwidth=640",

    

    price: "12498/-",
    name:'TRY ON AVAILABLE',

    description: "Almond shape finger ring",
},
{
        
    id: "14",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/511170FCEAAP5_1.jpg?impolicy=pqmed&imwidth=640",

    

    price: "34989/-",
    name:'TRY ON AVAILABLE',

    description: "White stones Finger ring",
},
{
        
    id: "15",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/502996FVNAA09.jpg?impolicy=pqmed&imwidth=640",

    

    price: "24989/-",
    name:'TRY ON AVAILABLE',

    description: "Contemporary Ring",
},
{
        
    id: "16",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/502614FCDAA09.jpg?impolicy=pqmed&imwidth=640",

    

    price: "64989/-",
    name:'TRY ON AVAILABLE',

    description: "Beautiful Finger Ring",
},
{
        
    id: "17",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/500496FDAAA09.jpg?impolicy=pqmed&imwidth=640",

    

    price: "54989/-",
    name:'TRY ON AVAILABLE',

    description: "White stone Gold Ring",
},
{
        
    id: "18",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/503419FLRAA02_1.jpg?impolicy=pqmed&imwidth=640",

    

    price: "34989/-",
    name:'TRY ON AVAILABLE',

    description: "Diamond with Gold Ring",
},
{
        
    id: "19",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/502997FNDAA02_1.jpg?impolicy=pqmed&imwidth=640",

    

    price: "124982/-",
    name:'TRY ON AVAILABLE',

    description: "Platinum Diamond Ring",
},
{
        
    id: "20",

    category: "jwellery",

    img: "https://staticimg.titan.co.in/Tanishq/Catalog/501057FEXAA04.jpg?impolicy=pqmed&imwidth=640",

    

    price: "124982/-",
    name:'TRY ON AVAILABLE',

    description: "Classic simple Ring",
},



{

      id: "21",
            
      category: "jwellery",
            
      img: "https://staticimg.titan.co.in/Tanishq/Catalog/511098FLCAA00.jpg?impolicy=pqmed&imwidth=640",
            
                  
            
      price: "24963/-",
      name:'TRY ON AVAILABLE',
            
      description: "Execellent Gold Ring",
 }])
  return (
    <div>
    <UserContext.Provider value={[category]} >
       {props.children}
    </UserContext.Provider>
    </div>
  )
}

export default Category