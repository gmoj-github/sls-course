const schema = {
    properties: {
        queryStringParameters: {
            type: "object",
            properties: {
                title: {
                    type: 'string',
                },
            },
            required: ['title'],
        },
    },
    required: [
        'body',
    ],
};

export default schema;