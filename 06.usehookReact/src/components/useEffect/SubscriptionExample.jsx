import React, { useEffect, useState } from 'react';

const SubscriptionExample = () => {
  const [subscriptionState, setSubscriptionState] = useState('');

  useEffect(() => {
    // Simulating a subscription with a setTimeout
    const subscriptionId = setTimeout(() => {
      setSubscriptionState('Subscription is active...');
    }, 1000); // Simulating a 2-second subscription

    // Cleanup function to deactivate the subscription after 2 seconds
    const cleanupSubscription = setTimeout(() => {
      clearTimeout(subscriptionId);
      setSubscriptionState('Subscription is now deactivated...');
      console.log('Subscription deactivated after 5 seconds.');
    }, 5000);

    // Cleanup function to clear the second timeout if the component unmounts before it fires
    return () => {
      clearTimeout(subscriptionId);
      clearTimeout(cleanupSubscription);
      console.log('Subscription cleanup executed.');
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1 className='text-center text-white bg-dark'>Subscription Example</h1>
      <p>{subscriptionState}</p>
    </div>
  );
};

export default SubscriptionExample;
