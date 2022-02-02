let motivquotes = ["All our dreams can come true, if we have the courage to pursue them.– Walt Disney",
    "The secret of getting ahead is getting started."
]
let motivpic = ["https://media.istockphoto.com/photos/success-and-victory-picture-id1055435484?k=20&m=1055435484&s=612x612&w=0&h=ALe0PAI0BCLI5PxilCm6uP16eJjKB6l4BFUb7-fuzco=",
    "https://media.gettyimages.com/photos/woman-silhouette-at-sunset-on-hill-picture-id1071104734?s=612x612"
]

let shootout = ["let's go !", "you can do !", "you da best !"]

let motivate = () => {
    let rand1 = Math.round(Math.random(Math.random() * motivquotes.length))
    let rand2 = Math.round(Math.random(Math.random() * motivpic.length))
    let rand3 = Math.round(Math.random(Math.random() * shootout.length))
        //console.log(rand)
    console.log(motivquotes[rand1])
    console.log(motivpic[rand2])
    console.log(shootout[rand3])
};

motivate()
    //console.log(Math.round(Math.random(Math.random() * motivquotes.length)))