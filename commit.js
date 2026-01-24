const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'activity.json');

const updateActivity = () => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        data.last_updated = new Date().toISOString();
        data.counter = (data.counter || 0) + 1;
        
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Updated activity.json: ${data.last_updated}, counter: ${data.counter}`);
    } catch (error) {
        console.error('Error updating activity.json:', error);
        process.exit(1);
    }
};

updateActivity();
