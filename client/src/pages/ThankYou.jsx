import React from 'react';
import ThankYouMessage from '../components/ThankYouMessage';
import GTM from '../components/GoogleTagManager/GTM';

function ThankYou() {
    return (
        <>
            <GTM />
            <ThankYouMessage />
        </>
    );
}

export default ThankYou;