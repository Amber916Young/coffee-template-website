// Get all category headings
const categoryHeadings = document.querySelectorAll('.category-heading');

const productLists = document.querySelectorAll('.product-list');



// Get all products
const productCards = document.querySelectorAll('.product-card');


// Add click event listener to each category heading
categoryHeadings.forEach((heading,index) => {
  heading.addEventListener('click', () => {
    // // Toggle the visibility of the immediate subcategory list
    // const subcategoryList = heading.nextElementSibling;
    // subcategoryList.classList.toggle('subcategory-list--expanded');

    // // Toggle the visibility of the nested subcategory lists
    // const nestedSubcategoryLists = subcategoryList.querySelectorAll('.subcategory-list');
    // nestedSubcategoryLists.forEach(nestedList => {
    //   nestedList.classList.remove('subcategory-list--expanded');
    // });
     // Collapse other subcategory lists and expand the clicked one
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

        // Hide all product lists
         // Hide all product cards
        productCards.forEach(card => {
            card.style.display = 'none';
        });
  

        // Show the product list for the clicked category
        // productLists[index].classList.add('active');

        // Check if it's the last category
        if (index === categoryHeadings.length - 1) {
            const categoryName = heading.textContent;
            console.log(`Last category: ${categoryName}`);
            // Perform additional actions for the last category
        } else {
            const categoryName = heading.textContent;
            console.log(`Category: ${categoryName}`);
            // Perform actions for categories other than the last one
        }


   // Get the category name of the clicked heading
   const categoryName = heading.textContent;

   productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (cardCategory === categoryName) {
        card.style.display = 'block';
        }
    });
        



  });
});
