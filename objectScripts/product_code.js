let string = "XYZ:1234-L";


parsePartCode(string);

/**
 * Parses, reformats, and displays encoded string
 * @param {string} productCode 
 * @returns string 
 */
function parsePartCode(string) {
    const parsedString = {}

    let codeColonIndex = string.indexOf(":");
    let codeDashIndex = string.indexOf("-");
    
    parsedString.supplierCode = string.slice(0, codeColonIndex);
    parsedString.productNumber = string.slice(codeColonIndex+1, codeDashIndex);
    parsedString.size = string.slice(codeDashIndex+1);

    let displayMessage = console.log(`
    \n Supplier: ${parsedString.supplierCode}, \n Product Number: ${parsedString.productNumber}, \n Size: ${parsedString.size}
    `);

    return displayMessage;
}