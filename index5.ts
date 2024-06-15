// Question # 5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called



function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 1000);
    });
}

function executeSequentially() {
    fetchData()
        .then((fetchResult) => {
            console.log(fetchResult);
            return processData(fetchResult);
        })
        .then((processResult) => {
            console.log(processResult);
        })
        .catch(console.error);
}

executeSequentially();
