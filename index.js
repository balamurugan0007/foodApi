const express=require("express")
const app=express()
const port=3002


var food=[
    {
        "id":1,
        "dish_name":" Chicken Noodles",
        "dis_pic":"https://www.allrecipes.com/thmb/iYvCr914MOIZ8lAI0-9DESXhbdI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4546075-spicy-chicken-noodles-Chef-John-1x1-1-f1d73f027f804fe8aa8c87248c93a3ba.jpg",
        "Ratings":"4.7",
        "discription":"No matter what recipe they're used in, rice noodles are a proven crowd-pleaser. I think this spicy chicken noodles dish is perfect for using up leftover chicken, assuming it wasn't horribly overcooked in the first place. If you did want to use raw chicken, go ahead and chop it up, and stir-fry it for a minute or two before adding your vegetables.",
    },
    {
        "id":2,
        "dish_name":"Fish curry",
        "dis_pic":"https://media.istockphoto.com/photos/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background-picture-id1214416414?b=1&k=20&m=1214416414&s=170667a&w=0&h=FZFYYlT2R5BsZK-7433EcdBGkEI43M-HIxnM-FmuEv8=",
        "Ratings":"4.0",
        "description":"Its a sea food very delesious one",
        "price":130

    },
    {
        "id":3,
        "dish_name":"Mutton currry",
        "dis_pic":"https://media.istockphoto.com/id/1164095805/photo/spicy-indian-lamb-curry-close-up.jpg?s=612x612&w=0&k=20&c=XfeuNZr25yYu7VckmFAckEWZa-i8TSX97T5lBTT4Tf4=",
        "Ratings":"4.5",
        "description":"",
        

    },
    {
        "id":4,
        "dish_name":"Chiken Briyani",
        "dis_pic":"https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__700_0_0_0_auto.jpg",
        "Ratings":"4.8",
        "description":"The most of the peoples are like the dish",
        "price":260

    },
    {
        "id":5,
        "dish_name":"Fish Gravy",
        "dis_pic":"https://www.mydelicious-recipes.com/home/images/410_1200_1200/mydelicious-recipes-fish-curry",
        "Ratings":"4.1",
        "description":"Fish is one of the healthiest and most preferred seafood and fish curry is one of the delicious and ",
        "price":250

    },
    {
        "id":6,
        "dish_name":"Hyderabadi Mutton briyani",
        "dis_pic":"https://theyummydelights.com/wp-content/uploads/2018/09/mutton-biryani-recipe-500x450.jpg",
        "Ratings":"4.7",
        "description":"It is a very popular Indian dish",
        "price":320
        

    },
    {
        "id":7,
        "dish_name":"Shrimp fry",
        "dis_pic":"https://healthyrecipesblogs.com/wp-content/uploads/2012/12/spicy-shrimp-featured-2021.jpg",
        "Ratings":"3.9",
        "description":"Sea food you never teaste it like this",
        "price":160
        

    },
    {
        "id":8,
        "dish_name":"Fried Chicken",
        "dis_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXNd0wer5weKy68G-b9DNAFibxIDWF_GlTQ&usqp=CAU",
        "Ratings":"4.2",
        "description":"Fried chicken taste is similar to Kfc chiken",
        "price":90
    },
    {
        "id":9,
        "dish_name":"kerala chiken roast",
        "dis_pic":"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Donna_George/Kerala_Chicken_Roast_Recipe-11_400.jpg",
        "Ratings":"4.22",
        "description":" It is a Kerala side dish ",
        "price":160
    },
    {
        "id":10,
        "dish_name":"Mutton Chukka",
        "dis_pic":"https://www.hungryforever.com/wp-content/uploads/2021/01/mutton-chukka-recipe-1.jpg",
        "Ratings":"4.1",
        "description":"The spiciest sidedish in Mutton curry",
        "price":130
    },
    {
        "id":11,
        "dish_name":"Mongolian Beef",
        "dis_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmrB_QvkQ4i9HJ4zAEKePl7zl9WbhqfQcWyw&usqp=CAU",
        "Ratings":"3.7",
        "description":"The spicy beef cury .teaste it and feel the one",
        "price":170
    },
    {
        
        "id":12,
        "dish_name":"Grilled Chiken",
        "dis_pic":"https://media.istockphoto.com/id/1217611897/photo/grilled-chicken-breasts-with-thyme-garlic-and-lemon-slices-on-a-grill-pan-close-up.jpg?b=1&s=170667a&w=0&k=20&c=16t5ksKa70II9TSoE09VOYtKUtcHOf22n-vNcOnfWhc=",
        "Ratings":"4.9",
        "description":"A full of chiken Grilled with a spicy masalas.",
        "price":220
    }, 
    {
        
        "id":13,
        "dish_name":"Mutton pepper fry",
        "dis_pic":"https://mariasmenu.com/wp-content/uploads/Mutton-Pepper-Roast-500x500.png",
        "Ratings":"4.5",
        "description":" The extreme spicy dish you can teaste it",
        "price":160
    },
    {
        
        "id":14,
        "dish_name":"Bombay briyani",
        "dis_pic":"https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
        "Ratings":"4.2",
        "description":"briyani is suggested dish for you.Because it is favarite for all",
        "price":320
    },
    {
        
        "id":15,
        "dish_name":"Chiken Tandoori",
        "dis_pic":"https://www.yummyoyummy.com/wp-content/uploads/2020/11/IMG_9730-scaled.jpg",
        "Ratings":"4.8",
        "description":"All time favourite one.",
        "price":370
    }

]

var vegfood=[
    {
        "id":0,
        "dish_name":"Veg salad",
        "dis_pic":"https://static.onecms.io/wp-content/uploads/sites/19/2011/04/08/chunky-vegetable-salad-ay-2000.jpg",
        "Ratings":"4.9",
        "description":"Cabbage maintains a nice crunch when it's tossed with an easy dressing in this simple cabbage salad ...",
        "price":130
    },
    {
        "id":1,
        "dish_name":"Veg pullao",
        "dis_pic":"https://www.madhuseverydayindian.com/wp-content/uploads/2020/06/vegetable-pulao-instant-pot-pressure-cooker-500x375.jpg",
        "Ratings":"4,7",
        "description":"Easy and delicious instant pot pot vegetable pulao made with fragrant basmati rice, vegetables and ",
        "price":120
    },
    {
        "id":2,
        "dish_name":"curd rice",
        "dis_pic":"https://imagevars.gulfnews.com/2021/01/06/Curd-Rice-_176d6967c16_medium.jpg",
        "Ratings":"4.1",
        "description":"the simplest and best of all variety rice. I love it, so enjoy the process of making",
        "price":60
    },
    {
        "id":3,
        "dish_name":"Coconut rice",
        "dis_pic":"https://lh3.ggpht.com/-GE2W5PArUcs/UWGOtyoK9SI/AAAAAAAAOa0/Ui4Ml1SASqk/coconut%252520rice1_thumb%25255B26%25255D.jpg?imgmax=800",
        "Ratings":"4.23",
        "description":"",
        "price":55
    },
    {
        "id":3,
        "dish_name":"Lemon rice",
        "dis_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGNDz7W118FGWNuffWZL93t9j0VnsEIoFNwThq42xgwKFAKblFL8tb6_COC18ziSKZ-k&usqp=CAU",
        "Ratings":"4.4",
        "description":"the simplest and best of all variety rice.",
        "price":60
    },
    {
        "id":4,
        "dish_name":"Idiyappam",
        "dis_pic":"https://t3.ftcdn.net/jpg/02/26/20/84/360_F_226208436_5ghCnvflnuIkX4D4TR7wUprWbqN746l0.jpg",
        "Ratings":"4.3",
        "description":"",
        "price":75
    },
    {
        "id":5,
        "dish_name":"Idly",
        "dis_pic":"https://thumbs.dreamstime.com/b/stuffed-idli-south-indian-breakfast-sambhar-145012297.jpg",
        "Ratings":"4.0",
        "description":"",
        "price":60
    },
    {
        "id":6,
        "dish_name":"parrata",
        "dis_pic":"https://media.istockphoto.com/id/1296798642/photo/roti-parata-or-roti-canai-with-lamb-curry-sauce-popular-malaysian-breakfast.jpg?s=612x612&w=0&k=20&c=fF4AYfw8w7fxZNDKW-xenP8O7KIs7xQTf0KuCuFGIj8=",
        "Ratings":"4.9",
        "description":"Teaste wise it is a awosome dish",
        "price":60
    },
    {
        "id":7,
        "dish_name":"Dosa",
        "dis_pic":" https://wallpaperaccess.com/full/6340449.jpg",
        "Ratings":"4.6",
        "description":"",
        "price":80
    },
    {
        "id":8,
        "dish_name":"Ven pongal",
        "dis_pic":"https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/07/PXL_20210712_211207957.PORTRAIT-01.jpeg?fit=%2C&ssl=1",
        "Ratings":"4.1",
        "description":"Super satisfying and comforting ven pongal recipe! It’s made with rice and moong dal, cooked till ...",
        "price":60
    },
    {
        "id":9,
        "dish_name":"Poori",
        "dis_pic":"https://pipingpotcurry.com/wp-content/uploads/2018/07/Instant-Pot-Potato-Curry-in-Tomato-Sauce-1.jpg",
        "Ratings":"4.7",
        "description":"Easy and comforting Potato Curry in Tomato Gravy made in the Instant Pot. This North Indian Potato ...",
        "price":70
    },
    {
        
        "id":10,
        "dish_name":"Veg briyani",
        "dis_pic":"https://img.freepik.com/free-photo/veg-biryani-veg-pulav-served-round-brass-bowl-selective-focus_466689-75106.jpg?w=2000",
        "Ratings":"4.74",
        "description":"Madeup with lot of vegtables",
        "price":170
    },
    {
        
        "id":11,
        "dish_name":"Chappathi",
        "dis_pic":"https://img.freepik.com/premium-photo/fresh-indian-chapati-tortillas-with-fresh-parsley-graphite-background_166116-5786.jpg?w=2000",
        "Ratings":"4.4",
        "description":"Whight loss diss. you can teast it",
        "price":0
    },
    {
        
        "id":12,
        "dish_name":"Sambar",
        "dis_pic":"https://t3.ftcdn.net/jpg/00/74/73/38/360_F_74733848_W8JCrFqWRXZkaEg6YpH1qUaUSqcylij8.jpg",
        "Ratings":"4.5",
        "description":"",
        "price":160
    },
    {
        
        "id":13,
        "dish_name":"Musrrom briyani",
        "dis_pic":"https://cookingfromheart.com/wp-content/uploads/2017/05/Chettinad-Mushroom-Biryani-4.jpg",
        "Ratings":"4.6",
        "description":"Delicious one pot meal of Chettinad Mushroom Biryani – highly flavorful and just so yum!",
        "price":190
    },
   

]
var soup=[
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"Tomato soup",
        "dis_pic":"https://media.30seconds.com/tip/lg/Fresh-Tomato-Fennel-Soup-Recipe-An-Elevated-Take-on-a-Fami-17191-c46ea32652-1628173316.jpg",
        "Ratings":"4.1",
        "description":"Tomato and Mint Soup is a delicious and healthy Continental soup recipe that you can prepare for ...",
        "price":50
    },
    {
        'id':1,
        "dish_name":"Veg soup",
        "dis_pic":"https://img.freepik.com/free-photo/garlic-soup-topped-with-croutons-bowl-wooden-table_123827-20918.jpg?w=2000",
        "Ratings":"4.2",
        "description":"",
        "price":60
    },
    {
        'id':1,
        "dish_name":"Miso soup",
        "dis_pic":"https://photos.bigoven.com/recipe/hero/japanese-miso-soup-8f45df.jpg",
        "Ratings":"3.7",
        "description":"",
        "price":70
    },
    {
        'id':1,
        "dish_name":"Egg soup",
        "dis_pic":"https://storage.googleapis.com/gen-atmedia/3/2011/10/fa778f403dc37d943dafe517433a272a3cca0d26.jpeg",
        "Ratings":"4.1",
        "description":"",
        "price":60
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    },
    {
        'id':1,
        "dish_name":"",
        "dis_pic":"",
        "Ratings":"",
        "description":"",
        "price":0
    }
    
]

app.get("/food/nonveg",(req,res)=>{
    res.send(food);
})

app.get("/food/veg",(req,res)=>{
    res.send(vegfood);
})

app.get("/food/soup",(req,res)=>{
    res.send(soup);
})

app.listen(port,()=>{
    console.log(`example app listion on ${port}`)
})