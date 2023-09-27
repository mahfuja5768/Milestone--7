# Question-1: Add at least 3 Project features

## Answer: 

## Project Features: 
## 1. Introduction to Web Development
![Web Development cover](https://i.ibb.co/Lk8Zsx3/wec-development.jpg)

Learn the basics of web development and create your first website. Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.



## 2. Data Science Fundamentals
![Web Development cover](https://i.ibb.co/dj4kfYX/data-science.jpg)

Explore the world of data science and gain essential skills in data analysis. Data science is the science of analyzing raw data using statistics and machine learning techniques with the purpose of drawing conclusions about that information.



## 3. Graphic Design Fundamentals
![Web Development cover](https://i.ibb.co/4JCZJ9X/graphic-design.webp)

Learn the principles of graphic design and create stunning visuals. Some very basic elements, including line, shape, form, texture, and balance. They might not seem like much on their own, but together, they're part of almost everything we see and create. The fundamentals can be intimidating at first, especially if you don't consider yourself an artist.


# Question-2: Discuss how you managed the state in your assignment project.

## Answer: 
- First I initialize the states using useState :

const [courseNames, setCourseNames] = useState([]); <br>
const [remainingCreditHr, setRemainingCreditHr] = useState(20); <br>
const [credit, setCredit] = useState(0); <br>
const [totalPrice, setTotalPrice] = useState(0); <br>

--courseNames: This state variable is an array that stores the selected courses. <br>
--remainingCreditHr: This state variable represents the remaining credit hours available for course selection and is initialized to 20. <br>
--credit: This state variable keeps track of the total credit hours of selected courses. <br>
--totalPrice: This state variable keeps track of the total price of selected courses.


- Then Updating State :
I updated the States using the setCourseNames, setRemainingCreditHr, setCredit, and setTotalPrice functions provided by useState. 
For example, the handleToAddName function is called when a course is added. It updates courseNames, calls handleAddCredit, handleRemainingCreditHr, and handleTotalPrice functions to update other state variables.

- Displaying State:
The state values (courseNames, credit, remainingCreditHr, and totalPrice) are used to display information in the UI, such as in the <CourseBookmarks> component.