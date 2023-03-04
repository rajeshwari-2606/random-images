//data
const Quotes=[
   {
      image:`img/img1.jpg`
   },
   {
      image:`img/img3.jpg`
   },
   {
      image:`img/img4.jpg`
   },
   {
      image:`img/img5.jpg`
   },
   {
      image:`img/img6.jpg`
   },
   {
      image:`img/img7.jpg`
   },
   {
      image:`img/img8.jpg`
   },
   {
      image:`img/img9.jpg`
   },
   {
      image:`img/img10.jpg`
   }
]


// acess the elements
const img=document.getElementById('id1');
const Btn=document.getElementById('generate');

//function to generate diffrent quotes
//normal function
//function Random Quotes(){}
//}
//arrow function
const RandomQuotes=()=>{
    //logic to generate random Quotes
    let index=Math.floor(Math.random()*(Quotes.length))
    img.src=Quotes[index].image
    //to display the output
    
}

//button functionality 
//Btn.onclick=Random Quotes
Btn.addEventListener('click',RandomQuotes)