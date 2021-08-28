/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



//cosnt declaration for this project
const header=document.querySelector('.header');

const linkList=document.querySelector('.link-list');
const studentList=document.querySelector('.student-list');
const h2=document.querySelector('h2');

//search box element declaration and creation 
const label=document.createElement('label');
label.className='student-search';
const span=document.createElement('span');
span.textContent='search by name';
label.appendChild(span);
const input=document.createElement('input');
input.placeholder='search by name...';
input.id='search';
const search=document.createElement('button');
search.innerHTML=`<img src="img/icn-search.svg" alt="Search icon">`;
label.appendChild(input);
label.appendChild(search);
header.appendChild(label);
const li=studentList.children;









//create a showpage function 

function showPage(list,page) {
   const startIndex=(page*9)-9;
   const endIndex=page*9
   studentList.innerHTML='';

   for (let i=0;i<list.length;i++) {
      const len=list.length;
      //let studentItem=list[startIndex+i];
      if (i>=startIndex && i<endIndex) {
      let studentItem=`<li class="student-item cf">
    <div class="student-details">
      <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email} </span>
    </div>
    <div class="joined-details">
      <span class="date"> Joined ${list[i].registered.date} </span>
    </div>
  </li>`
   studentList.insertAdjacentHTML('beforeend',studentItem );
   };
      


   };
 






};

showPage(data,1);



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   if (list.length!==0){
      const numOfPages=Math.ceil(list.length/9);
      linkList.innerHTML='';
      for (let i=1;i<=numOfPages;i++) {
         var button=`<li>
                        <button type="button">${i}</button>
                     </li>`
      linkList.insertAdjacentHTML('beforeend',button);
      };
      
      //using querySelector bc it only selects the first element 
      //setting the first pagination button to "active" class
      const first_page_button=document.querySelector('.pagination button');
      first_page_button.className='active';
   }else{
      linkList.innerHTML='';

   }
   linkList.addEventListener('click',(e)=>{
      const button=e.target;
      if (button.tagName='button') {
         const first_active=document.querySelector('.active');
         //remove the first active status
         first_active.className='';
         button.className='active';
         showPage(list,parseInt(button.textContent));
   
   }});
   
      
};

addPagination(data);




//add a search filter here 

input.addEventListener('submit',(e)=>{
   const search_term=e.target.value.toLowerCase();
   let new_data=[];
   data.forEach(element=>{
      //onsole.log(element);
      let name=element.name.first+element.name.last;
      
      if (name.toLowerCase().includes(search_term)){
         new_data.push(element);
      };
   });
   console.log(new_data.length)
   
   //Since showPage function clears the innerHTML at everycall, I have to put this before
   //the next if statement in order to display "no results found"
   //Seems like a clumsy way; Is there any better way to do it?
   showPage(new_data,1);
   addPagination(new_data); 
   
   
   if (new_data.length===0){
      console.log('here');
      studentList.innerHTML='No results found'

   }



}

);


input.addEventListener('keyup',(e)=>{
   const search_term=e.target.value.toLowerCase();
   let new_data=[];
   data.forEach(element=>{
      
      let name=element.name.first+element.name.last;
      
      if (name.toLowerCase().includes(search_term)){
         new_data.push(element);
      };
   });
   //console.log(new_data.length)
   
   //Since showPage function clears the innerHTML at everycall, I have to put this before
   //the next if statement in order to display "no results found"
   //Seems like a clumsy way; Is there any better way to do it?
   showPage(new_data,1);
   addPagination(new_data); 
   
   
   if (new_data.length===0){
      console.log('here');
      studentList.innerHTML='No results found'

   }



}

);