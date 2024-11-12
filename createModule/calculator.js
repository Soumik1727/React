
            // This is a module file, I'm exporting the file
            //  from here and importing from index.js file
const sumData = (a, b) => {
    return (a+b);
}

export default sumData;     // Exporting the function   // default export

const subData = (n1, n2) => {
    return (n1 - n2);
}
export {subData};   // named export // using this exporting technique
                    // we can export multiple functions