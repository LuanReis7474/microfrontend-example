import React, { useState } from 'react';
import { IframeMessageProxy } from 'iframe-message-proxy';

export const App = () => {
    const [user, setUser] = useState();
    const getUser = async () => {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'getUser',
        });

        setUser(response);
    };

    return (
        <div>
            <h1>
                React
            </h1>
            <button onClick={getUser}>Get user</button>

            {user && (
                <>
                    <p>
                        <strong>Name: </strong>
                        {user.name}
                    </p>
                    <p>
                        <strong>Website: </strong>
                        {user.website}
                    </p>
                </>
            )}
        </div>
    );
};
