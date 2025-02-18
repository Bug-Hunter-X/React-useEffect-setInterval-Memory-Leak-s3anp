# React useEffect setInterval Memory Leak

This repository demonstrates a common mistake when using the `useEffect` hook in React with `setInterval`.  The problem arises from not properly clearing the interval when the component unmounts or when the dependencies change, leading to memory leaks and unexpected behavior.  The solution shows the correct way to manage the interval to prevent these issues.

## Bug

The `bug.js` file contains a component that uses `useEffect` with `setInterval` to update a counter. However, the interval is not correctly cleared, resulting in multiple intervals running simultaneously.

## Solution

The `bugSolution.js` file demonstrates the correct implementation. It uses a cleanup function within the `useEffect` hook to clear the interval when the component unmounts or when the dependencies change. This prevents memory leaks and ensures that only one interval runs at a time.