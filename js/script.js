/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//declared global variables
const ul = document.querySelector('.student-list');
const li = ul.children;
const pages = Math.ceil((li.length / 10));



//function that displays LI elements based on the page number selected.
function showPage(page){
   //for loop that hides LI elements for the pagination function
   for(let i = 0; i < li.length; i++){
      li[i].style.display = 'none';
   }
  
   //for loop that displays correct LI elements based on currently active page.
   for(let i = 10*(page-1); i < 10*(page); i++){
      if(li[i]){
      li[i].style.display = '';
      }
   }
   
   
     
   
}



//function that creates adds functionality to page numbers buttons
function appendPageLinks() {
   const div = document.querySelector('.page');
   const container = document.createElement('div');
   container.className = 'pagination';
   const pageUl = document.createElement('ul');
   container.append(pageUl);
   div.append(container);

   
   //creates and append buttons to an UL element
   for (let i = 1; i < pages + 1; i++) {
      const pageLi = document.createElement('li');
      const button = document.createElement('a');
      if(i == 1){
         button.className = 'active';
      }
      button.style.href = '#';
      button.style.cursor = 'pointer';
      button.textContent = i;
      pageLi.append(button);
      pageUl.append(pageLi);
   }
   //runs the showPage function for the first page
   showPage(1)

   //event listener that checks if a page number has been clicked and runs the function showPage
   const current = pageUl.addEventListener('click', (e)=>{
      showPage(e.target.textContent);
      
      const pageLi = document.querySelector('.active');
      pageLi.className = '';
      
      e.target.className = 'active';
      
   })
}

//appends the page with page numbers
appendPageLinks();


