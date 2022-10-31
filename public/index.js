
function smartBusiness() {
    var cost = parseInt(document.getElementById("cost-price").value)
    var trans = parseInt(document.getElementById("transport").value)
    var quan = parseInt(document.getElementById("quantity").value)

    var sellingPrice = cost + trans
    var estSellingprice = sellingPrice / quan 
    var uCost = estSellingprice * 0.25
    var uSelling = estSellingprice +uCost
    document.getElementById("selling-price").value = uSelling
}

   
   function myFunction(){
    var businessType = (document.getElementById("tob").value)
    var commodityName = (document.getElementById("cm").value)
    var businessOwnerName = (document.getElementById("ui").value)
   var countyName = (document.getElementById("county").value)
   var estimatedPrice = (document.getElementById("selling-price").value)

   var para = (document.createElement("p"))
   para.innerHTML = ("Hi " + businessOwnerName + " your estimated selling price for commodity " + commodityName + " is " + estimatedPrice)

   document.getElementById("gen-ui").appendChild(para)



    console.log(businessType)
    console.log(commodityName)
    console.log(businessOwnerName)
    console.log(countyName)


   }

   var myCarousel = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myCarousel++;
  if (myCarousel > x.length) {myCarousel = 1}    
  x[myCarousel-1].style.display = "flex";  
  setTimeout(carousel, 3000); 
}

    
    


    









