export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Messagem do satelite',
            website: 'recebida da camada superior',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
