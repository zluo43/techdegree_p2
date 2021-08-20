/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

//add a search box 

const header=document.querySelector('.header');
const ul=document.querySelector('.student-list');
const h2=document.querySelector('h2');
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







// const ul=document.querySelector('.student-list');
const li=ul.children;
//const names=li.querySelector('h3'); //not able to select tho 










function showPage(list,page) {
   const startIndex=(page*9)-9;
   const endIndex=page*9
   const studentList=document.querySelector('.student-list');
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
   var numOfPages=Math.ceil(list.length/9);
   var linkList=document.querySelector('.link-list');
   linkList.innerHTML='';
   for (let i=1;i<=numOfPages;i++) {
      var button=`<li>
                     <button type="button">${i}</button>
                  </li>`
   linkList.insertAdjacentHTML('beforeend',button);
   };
   const b=document.querySelector('button');
   b.className='active';
   




};

const linklist=document.querySelector('.link-list');
linklist.addEventListener('click',(e)=>{
   const button=e.target;
   if (button.tagName='button') {
      var first_active=document.querySelector('.active');
      first_active.className='';
      button.className='active';
      //console.log(button.textContent);
      showPage(data,parseInt(button.textContent));




   }




})

addPagination(data);






// Call functions

//add a search filter here 
input.addEventListener('keyup',(e)=>{
   let term=e.target.value.toLowerCase();
   const li=ul.querySelectorAll('li');
   let arr=Array.from(li);
   const new_list=[]; 
   arr.forEach(function(name){
      const names=name.querySelector('h3').textContent;
      if (names.toLowerCase().indexOf(term)===-1) {
         name.style.display='None';
         counter=counter+1;

         //addPagination(data.length)


      } else if (term==='') {
         name.style.display='block' };
      });
   });   
