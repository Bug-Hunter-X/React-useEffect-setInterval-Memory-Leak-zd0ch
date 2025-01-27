```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Missing return statement to cleanup the interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```