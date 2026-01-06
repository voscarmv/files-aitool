const tools = [
    {
        type: 'function' as const,
        function: {
            name: 'sendFile',
            description: 'Take the Cache Key of a file as input, and send it to the user',
            parameters: {
                type: 'object',
                properties: {
                    filekey: {
                        type: 'string',
                        description: 'Cache Key of the file',
                    }
                },
                required: ['filekey']
            }
        }
    },
];

const functions = {
    sendFile: async (params: any, additionalArgs: any): Promise<string> => {
        const { aicache, send } = additionalArgs;
        const { filekey } = params;
        const buffer = Buffer.from(aicache.get(filekey), 'base64');
        send(buffer);
        return `File ${filekey} sent`;
    },
};

export const filetools = { tools, functions };