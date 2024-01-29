const now = new Date();
const options = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric'
};
export const activeTasks = [
    {
        id: 1,
        source: 'AMANA Polyetser STOCK 1',
        startTime: now.toLocaleString('en-US', options),
        percentage: 0.45,
        quality: 0.87
    },
    {
        id: 2,
        source: 'AMANA Polyetser STOCK 2',
        startTime: now.toLocaleString('en-US', options),
        percentage: 0.62,
        quality: 0.91
    },
    {
        id: 3,
        source: 'AMANA Polyetser STOCK 3',
        startTime: now.toLocaleString('en-US', options),
        percentage: 0.28,
        quality: 0.75
    },
    {
        id: 4,
        source: 'AMANA Polyetser STOCK 4',
        startTime: now.toLocaleString('en-US', options),
        percentage: 0.73,
        quality: 0.95
    },
    {
        id: 5,
        source: 'AMANA Polyetser STOCK 5',
        startTime: now.toLocaleString('en-US', options),
        percentage: 0.15,
        quality: 0.62
    }
];

export const columnheaders=['Task ID', 'Source', 'Start', 'Percentage', 'Quality']
