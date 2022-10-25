# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This is not a big deal since Cohort will not have any foreign keys. When we generate Student model, each entry/student/row will have Cohort's id as their foreign key (cohort_id), since each student can only belong to one Cohort. Also we need to add belongs_to in our models folder ... Student < ApplicationRecord

Researched answer: My researched answer provided nothing new for me to enter here. Unless im reading this incorrectly, only one model is generated at this point. The second model - Student - when generated, will have one additional column - cohort_id - as its foreign key.

2. Which RESTful routes must always be passed params? Why?

Your answer: In order to allocate an item, we need its Id as a parameter when using the following: GET #show - since we need to display a specific item. GET #edit - since we need to edit a specific item. PATCH/PUT #update - since we are updating a specific item. DELETE - since we need to delete a specific item.

Researched answer:In order to allocate an item, we need its Id as a parameter when using the following: GET #show - since we need to display a specific item. GET #edit - since we need to edit a specific item. PATCH/PUT #update - since we are updating a specific item. DELETE - since we need to delete a specific item.

3. Name three rails generator commands. What is created by each?

Your answer: 1. Generate model - will generate db model 2. Generate resource - similar to generate model but with additional items created (routes and controllers ) 3. Generate migration - will generate a change to existing db schema

Researched answer: 1. Generate model - The simplest and most lightweight is the model generator. It creates ActiveRecord and ApplicationRecord. 2. Generate resource - Will give us a bit more (than model) to start with. It creates ActiveRecord, ApplicationRecord, controller, and routes. 3. Generate migration - migration is a file that will allow you to make changes to the database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -method index - for displaying all of the students

action: "POST" location: /students - method create - for creating a form using ERB file

action: "GET" location: /students/new -method new - for creating new student

action: "GET" location: /students/2 - method show - to show a specific student

action: "GET" location: /students/2/edit -method edit - is for editing a specific student's data

action: "PATCH" location: /students/2 -method update - is for updating data of the specific student

action: "DELETE" location: /students/2 -method delete - to delete a specific student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I can see a label that says "Enter to-do here"
1. As a user I can see an input form where I type one to-do item
1. As a user I can see and click on a button to submit the input
1. As a user, once submitted, I can see a list generated with that item in it
1. As a user I can see a delete button next to each list item
1. As a user I can add more items
1. As a user, with each new to-do item, I can see that item on top of the to-do list
1. As a user I can click on delete button and remove that specific item from the list and keep other items in the same order
1. As a user I see a button that says CLEAR ALL and can clear the entire list
1. As a suer I will have data saved in browser memory even if the application is closed
