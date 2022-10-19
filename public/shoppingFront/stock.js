let stockProductos = [ 
    {id: 1, nombre: "Andes Red", tipo: "industrial", cantidad: 1, desc: "Un birra que re va con vos", precio: 200, ibu: "5%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20roja.jpg?alt=media&token=432f65f2-27ad-4893-8dee-235637b262ed"},
    {id: 2, nombre: "Andes ipa", tipo: "industrial", cantidad: 1, desc: "Un birra que re va con vos", precio: 200, ibu: "6%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20ipa.jpg?alt=media&token=dc05d263-b038-4322-977b-0ce265c8a64d"},   
    {id: 3, nombre: "Andes black", tipo: "industrial", cantidad: 1, desc: "Un birra que re va con vos", precio: 200, ibu: "5%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20black.jpg?alt=media&token=5cebb2c4-4157-4194-ad48-cc4659df3243"},
    {id: 4, nombre: "Andes clasica", tipo: "industrial", cantidad: 1, desc: "Un birra que re va con vos", precio: 180, ibu: "4%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/Andes-Origen-Rubia%20(1).webp?alt=media&token=f67f5e94-1cba-49d7-b11f-6411f0386906"},
    {id: 5, nombre: "Andes Red ipa", tipo: "industrial", cantidad: 1, desc: "Un birra que re va con vos", precio: 250, ibu: "6%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20ipa%20red.jpg?alt=media&token=6789fedb-cc87-4cb5-96f7-8fcab0fb32b2"},
    {id: 6, nombre: "Andes Red x6Pack", tipo: "industrial", cantidad: 1, desc: "Por que una si podes llevarte 6", precio: 110, ibu: "5%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20roja.jpg?alt=media&token=432f65f2-27ad-4893-8dee-235637b262ed"},
    {id: 7, nombre: "Andes ipa x6Pack", tipo: "industrial", cantidad: 1, desc: "Por que una si podes llevarte 6", precio: 110, ibu: "6%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20ipa.jpg?alt=media&token=dc05d263-b038-4322-977b-0ce265c8a64d"},   
    {id: 8, nombre: "Andes black x6Pack", tipo: "industrial", cantidad: 1, desc: "Por que una si podes llevarte 6", precio: 1100, ibu: "5%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20black.jpg?alt=media&token=5cebb2c4-4157-4194-ad48-cc4659df3243"},
    {id: 9, nombre: "Andes clasica x6Pack", tipo: "industrial", cantidad: 1, desc: "Por que una si podes llevarte 6", precio: 900, ibu: "4%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/Andes-Origen-Rubia%20(1).webp?alt=media&token=f67f5e94-1cba-49d7-b11f-6411f0386906"},
    {id: 10, nombre: "berliner-weisse", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "7%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/berliner-weisse.jpg?alt=media&token=ce4d2b7e-d1be-4502-b581-b70ec6fe4e3e"}, 
    {id: 11, nombre: "Black", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "7%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/black.jpg?alt=media&token=fad02e44-74b4-49ea-b4c5-a4cd500bc437"},  
    {id: 12, nombre: "Honey", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "7%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/honey.jpg?alt=media&token=996e450e-ba74-462c-abc3-84b4d560d1db"},  
    {id: 13, nombre: "red", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "7%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/red.jpg?alt=media&token=6af1d8ee-76df-4cdc-ba4f-bf211afc9b5b"},  
    {id: 14, nombre: "Ipa", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 350, ibu: "8%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/ipa.jpg?alt=media&token=998226d1-a21e-41ac-ac63-5f2832df4ae1"}, 
    {id: 15, nombre: "Red Ipa", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "8%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/redipa.jpg?alt=media&token=94c4b826-d7aa-4920-8723-c3fb2aaed2fd"}, 
    {id: 16, nombre: "Red honey", tipo: "Artesanal", cantidad: 1, desc: "El sabor de lo artesanal", precio: 300, ibu: "7%", img: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/redHoney.jpg?alt=media&token=386f9300-fba3-427b-b6a7-4746a7415982"},
]

