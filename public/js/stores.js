// Get all category headings
const categoryHeadings = document.querySelectorAll('.category-heading');

const productLists = document.querySelectorAll('.product-list');



// Get all products
const productCards = document.querySelectorAll('.product-card');


// Add click event listener to each category heading
categoryHeadings.forEach((heading,index) => {
  heading.addEventListener('click', () => {


    const subcategoryLists = document.querySelectorAll('.subcategory-list');
     subcategoryLists.forEach(subcategoryList => {
       if (subcategoryList.parentElement.previousElementSibling !== heading) {
         subcategoryList.classList.remove('subcategory-list--expanded');
       }
     });
 
     // Toggle the visibility of the clicked subcategory list
     const subcategoryList = heading.nextElementSibling;
     if(subcategoryList != null){
        subcategoryList.classList.toggle('subcategory-list--expanded');
     }
   const categoryName = heading.textContent;

     if(categoryName === "All"){
        productCards.forEach(card => {
            card.style.display = 'block'
        });
        return;
     }

         // Hide all product cards
        productCards.forEach(card => {
            card.style.display = 'none';
        });
  

   // Get the category name of the clicked heading


   console.info(categoryName)




   productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category').split("/");
        
        if (cardCategory.includes(categoryName)) {
            card.style.display = 'block'
        }
    });
        



  });
});
