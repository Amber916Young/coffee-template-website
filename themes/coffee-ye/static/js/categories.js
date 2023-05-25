  
categories = '[{"category":"coffee/sale-pre@christmas-roast","products":["Prduct1"]},{"category":"tool/kkkk","products":["Produc4"]},{"category":"tool/roast","products":["Produc3","Product2"]}]'

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
      categoryParts.forEach(function(part, index) { 
        var li = currentUl.querySelector("li[data-category='" + part + "']");
        
        if (!li) {
          li = document.createElement("li");
          li.setAttribute("data-category", part);
          
        //   var h3 = document.createElement("h3");
        //   h3.classList.add("category-heading");

          var headingElement;
          if (index === 0) {
            headingElement = document.createElement("h3"); // First layer uses h3
            headingElement.classList.add("category-heading");
          } else {
            headingElement = document.createElement("h4"); // Second layer uses h4
            headingElement.classList.add("category-heading");
          }

          var name = part.charAt(0).toUpperCase() + part.slice(1);
          name = name.replaceAll("-"," ");
          name = name.replaceAll("@","-");
          headingElement.textContent = name;
          li.appendChild(headingElement);
          
          var ul = document.createElement("ul")
          if (index === 1) {
            ul.classList.add("subcategory-list"); // Add additional class for h4 ul
          } else {
            ul.classList.add("subcategory-tree");
          }
          li.appendChild(ul);
          currentUl.appendChild(li);
        }
        
        currentUl = li.querySelector("ul.subcategory-tree, ul.subcategory-list");
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
  

