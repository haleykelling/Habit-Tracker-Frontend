# Right Track
Your personal habit tracking application!


## Table of Contents
* [General Info](#general-info)
* [Inspiration](#inspiration)
* [Demonstration Video](#demonstration-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Code](#example-code)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)
* [License](#license)


## General Info
Right Track was designed to allow users to build good habits and keep track of them. You can log in daily to see your habits that you are trying to form and complete them to build on your streaks. The app keeps track of your daily completion and records the number of days in a row you have completed each habit as a streak. 

## Inspiration 
I was inspired by my desire to live a positive and fulfilled life. The only way to form good habits is to keep yourself accountable for doing them every day, which is what this app aims to help you do. 

## Demonstration Video
[Right Track Youtube Demonstation]()

## Technologies 
* Ruby - version 2.6.1
* Rails - version 6.0.3, >= 6.0.3.1
* PostgreSQL
* HTML5
* CSS3 
* React - version 16.13.1
* Chart.js - version 2.9.3
* React Router Dom - version 5.2.0

Gems:
* Bcrypt - version 3.1.13
* JWT - version 2.2.1


## Setup 
To get Right Track installed and running clone the [backend Github Repository](https://github.com/haleykelling/Habit-Tracker-Backend) into your directory and bundle install:
```ruby
bundle install
```
After that make sure to create and migrate your database:
```ruby
rails db:create
rails db:migrate
```
To get the backend server running execute:
```ruby
rails s
```
You will also need to clone this frontend Github Repository into your directory and run:
```ruby
npm install
```
Then, run the following command to launch the website:
```ruby
npm start
```
You will be prompted that something is already running on localhost:3000, so you can enter 'Y' to run on a different port.

You can create a new user on the sign in page and get to tracking!

## Example Code
```javascript
    const habitsToDo = () => {
        let today = new Date()
        let formatted = today.toISOString().slice(0, 10)
        return habits.filter(habit => {
            return habit.date_last_completed !== formatted
        })
    }

    const setTopThree = () => {
        const sorted = habits.sort((a,b) => b.total - a.total)
        const topThree = sorted.slice(0, 3)
        return topThree.map(habit => {
            return <li><strong>{habit.name}</strong> - Completed {habit.total} times</li>
        })
    }
```

## Features
Current Features:
* Create a user and log in using bcrypt and jwt
* Create, edit, and delete habits 
* See your daily habits and mark them off when you have completed them for the day
* See a daily inspirational quote to help you stay motivated
* View your current habit streaks and your top three overall habits

Technical Accomplishments:
* I created the entire app using functional react components with hooks
* I implemented full auth and used React Router to only enable you to get into the app if you have logged in
* The entire app is a single page, utilizing conditional rendering and React Router to organize your view

Future Features:
* Receive notifications to help motivate you to complete your habits
* Give recommendations for new habits to try
* Add additional statistics and achievements to maintain a game-like atmosphere
* Add friend capabilities to create a community of support

## Status
The application is fully functional and ready to be enjoyed at current status. Future updates and improvements are still a possibility for future renditions.

## Contact
Created by [Haley Kelling](https://www.linkedin.com/in/haley-kelling/).

If you have any questions or comments feel free to reach out to me.

