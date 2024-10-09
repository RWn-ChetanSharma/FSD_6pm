# useEffect

> The useEffect hook in React is a powerful tool for managing side effects in functional components.


# Basic Syntax

>   useEffect(() => {
    // Your side effect logic here

    return () => {
        // Cleanup logic (optional)
    };
    }, [dependencies]);


# Key Points

1. Side Effects:

>  Anything that affects something outside the scope of the current function, such as fetching data, subscribing to events, or manually changing the DOM.

2. Dependency Array: 

> The second argument is an array of dependencies. The effect runs after the first render and every time one of the dependencies changes. If the array is empty ([]), the effect runs only once after the initial render.

3. Cleanup Function: 
 
> If your effect returns a function, React will call it when the component unmounts or before running the effect again (if dependencies change). This is useful for cleaning up subscriptions or timers.
