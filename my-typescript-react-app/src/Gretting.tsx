import React from 'react';


// This ensures type safety and provides clear documentation
interface GreetingProps {
    name: string; // Explicitly define the type of the name prop
}

// Use React.FC (FunctionComponent) type with the defined props interface
// This provides type checking for the component's props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    // The component remains largely the same, but now has type safety
    return <div>Hello, {name}!</div>;
};

export default Greeting;