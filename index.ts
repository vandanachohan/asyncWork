// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.



async function fetchGreeting(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Assalam alikuim!");
        }, 2000);
    });
}

// Example usage:
async function main() {
    const greeting = await fetchGreeting();
    console.log(greeting);
}

main();
