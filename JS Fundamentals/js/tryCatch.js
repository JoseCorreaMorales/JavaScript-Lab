

try {
    functionThatDoesNotExist();
} catch (error) {
    console.log(error)
}


function getEmployess() {
    console.log('downloading')
    setTimeout(() => {
    }, 3000);
    
    console.log('complete')
}
getEmployess();