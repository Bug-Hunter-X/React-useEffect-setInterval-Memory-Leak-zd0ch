# React useEffect setInterval Memory Leak

This repository demonstrates a common mistake when using the `useEffect` hook with `setInterval` in React.  Forgetting to return a cleanup function from the `useEffect` hook leads to a memory leak because the interval continues running even after the component unmounts.

## Bug
The `bug.js` file contains the faulty code. The `setInterval` function is called within the `useEffect` hook, but there's no mechanism to clear the interval when the component is unmounted. This leads to an interval that continues running indefinitely, potentially causing memory issues.

## Solution
The `bugSolution.js` file provides the correct implementation.  A cleanup function is returned from the `useEffect` hook which uses `clearInterval` to stop the interval when the component is unmounted or when the dependency array changes.