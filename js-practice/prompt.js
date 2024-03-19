const prompt = require('prompt');

// var prompt = require('prompt');

// //
// // Start the prompt
// //
// prompt.start();

// //
// // Get two properties from the user: username and email
// //
// prompt.get(['username', 'email'], function (err, result) {
//   //
//   // Log the results.
//   //
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
// });
function createStarDiamondPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
    
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

prompt.start();

prompt.get(['rows'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  rows: ' + result.rows);
    createStarDiamondPattern(result.rows);
});