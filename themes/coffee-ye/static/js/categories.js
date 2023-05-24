  


  function buildCategoryTree(categories, parentElement) {
    var rootUl = document.createElement("ul");
  
    // Create the default "All" category
    var allLi = document.createElement("li");
    var allHeading = document.createElement("h3");
    allHeading.classList.add("category-heading");
    allHeading.textContent = "All";
    allLi.appendChild(allHeading);
    rootUl.appendChild(allLi);

    categories.forEach(function(category) {
      var categoryParts = category.category.split("/");
      var currentUl = rootUl;
      categoryParts.forEach(function(part) {
        var li = currentUl.querySelector("li[data-category='" + part + "']");
        
        if (!li) {
          li = document.createElement("li");
          li.setAttribute("data-category", part);
          
          var h3 = document.createElement("h3");
          h3.classList.add("category-heading");
          var name = part.charAt(0).toUpperCase() + part.slice(1);
          name = name.replaceAll("-"," ");
          name = name.replaceAll("@","-");
          h3.textContent = name;
          li.appendChild(h3);
          
          var ul = document.createElement("ul");
          ul.classList.add("subcategory-tree");
          li.appendChild(ul);
          
          currentUl.appendChild(li);
        }
        
        currentUl = li.querySelector("ul.subcategory-tree");
      });
      
      category.products.forEach(function(product) {
        var productLi = document.createElement("li");
        productLi.textContent = product;
        currentUl.appendChild(productLi);
      });
    });
  
    parentElement.appendChild(rootUl);
  }
  
//   var parentElement = document.getElementById("category-tree");
//   console.info(parentElement)
//   if (parentElement) {
//     var categoryTree = buildCategoryTree(ttttt, parentElement);;
//     console.info(categoryTree);
//   } else {
//     console.error("Parent element not found.");
//   }
  