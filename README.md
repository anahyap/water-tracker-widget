# 💧 Water Intake Tracker

A simple water intake tracking application built with React. Users can track how many glasses of water they drink throughout the day, set personalized hydration goals, and view their progress in real time.

## Features

- Add or subtract glasses of water consumed
- Reset daily water intake to zero
- Set and update custom hydration goals
- Display current intake and daily goal
- Show a congratulatory message when the goal is reached
- Prevent water intake from going below zero
- Dynamically update the browser tab title

## Built With

- React
- JavaScript (JSX)
- CSS

## React Concepts Practiced

- **useState:** Managing water intake, hydration goals, and form input
- **useEffect:** Updating the browser tab title when values change
- **Props:** Passing data from WaterTracker to ProgressCard
- **Event Handling:** Managing button clicks and form submissions
- **Controlled Inputs:** Updating input values using React state
- **Conditional Rendering:** Displaying messages based on goal progress

## Components

**WaterTracker.jsx** — Main component responsible for managing state, user interactions, and goal updates.

**ProgressCard.jsx** — Reusable component that displays the number of glasses consumed compared to the user's goal.

## Purpose

This project was created as part of a React learning assignment to practice component-based development, state management, and interactive user interfaces.
