 const courses = document.getElementById('courses-list')





 courses.addEventListener('click', addToCart)
 document.getElementById('shopping-cart').addEventListener('click', removeCourse);
 document.addEventListener('DOMContentLoaded', displayLS);
 document.getElementById('clear-cart').addEventListener('click', e => {
     e.target.previousElementSibling.children[1].innerHTML = '';
     localStorage.clear()
 })



 function addToCart(e) {
     e.preventDefault();
     if (e.target.classList.contains('add-to-cart')) {
         const course = e.target.parentElement.parentElement

         getCourseInfo(course)
     }
 }

 function clearCart() {
     document.getElementById('clear-cart').addEventListener('click', (e) => {
         console.log('hello')
     })
 }

 function getCourseInfo(course) {
     const courseInfo = {
         img: course.querySelector('img').src,
         name: course.querySelector('h4').textContent,
         price: course.querySelector('.price span').textContent,
         id: course.querySelector('a').getAttribute('data-id')
     }

     insertToCart_LS(courseInfo)
 }

 function insertToCart_LS(courseInfo) {
     const {
         img,
         name,
         price,
         id
     } = courseInfo;

     const newCartElement = document.createElement('tr');
     newCartElement.innerHTML = `
        <td><img src=${img} width=100px></td>
        <td>${name}</td>
        <td>${price}</td>
        <td><a class='remove' data-id=${id}>X</a></td>
    `
     const parent = document.querySelector('#cart-content tbody');
     parent.appendChild(newCartElement);

     setLocalStorage(courseInfo)
 }


 function setLocalStorage(courseInfo) {
     const courses = getCoursesFromStorage()
     courses.push(courseInfo);
     localStorage.setItem('courses', JSON.stringify(courses))

 }


 function getCoursesFromStorage() {
     let courses;

     if (localStorage.getItem('courses') === null) {
         courses = []
     } else {
         courses = JSON.parse(localStorage.getItem('courses'))
     }

     return courses;
 }

 function displayLS() {
     const courses = getCoursesFromStorage();

     courses.forEach(course => {
         const {
             img,
             name,
             price,
             id
         } = course;

         const newCartElement = document.createElement('tr');
         newCartElement.innerHTML = `
        <td><img src=${img} width=100px></td>
        <td>${name}</td>
        <td>${price}</td>
        <td><a class='remove' data-id=${id}>X</a></td>
    `
         const parent = document.querySelector('#cart-content tbody');
         parent.appendChild(newCartElement);

     })
 }

 function removeCourse(e) {
     e.preventDefault();

     let courseID;
     if (e.target.classList.contains('remove')) {
         courseID = e.target.getAttribute('data-id');
         e.target.parentElement.parentElement.remove()
     }

     removeCourseLocalStorage(courseID)
 }

 function removeCourseLocalStorage(courseID) {
     let courses = getCoursesFromStorage();
     let filteredCourses = courses.filter(course => course.id !== courseID)
     localStorage.setItem('courses', JSON.stringify(filteredCourses))
 }