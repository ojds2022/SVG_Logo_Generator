const inquirer = require('inquirer');
const fs = require('fs');
const shapeSelected = require('./lib/shapes.js');

const questions = [
    "What three letters do you want in your logo?",
    "What color should the letters be? Color name or hex code will work.",
    "What shape should your logo be?",
    "What color should the shape be? Color name or hex code will work."
];

function modifyCircles(shapeConstructor) {
    const testing = fs.readFileSync('./examples/circle.svg', 'utf8');
    const modifiedData = testing
        .replace('<text x="100" y="120" font-size="65" text-anchor="middle" fill="white">', `<text x="100" y="120" font-size="65" text-anchor="middle" fill="${shapeConstructor.text_color}">`)
        .replace('<circle cx="100" cy="100" r="75" fill="green" />', `<circle cx="100" cy="100" r="75" fill="${shapeConstructor.shape_color}" />`)
        .replace('SVG', `${shapeConstructor.text}`);
    
    fs.writeFile('./examples/circleLogo.svg', modifiedData, 'utf8', (err) => {            
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated circleLogo.svg!`);
    });

    return modifiedData;
}

function modifySquares(shapeConstructor) {
    const testing = fs.readFileSync( './examples/square.svg' , 'utf8');
    const modifiedData = testing
        .replace('<text x="150" y="140" font-size="130" text-anchor="middle" fill="white">', `<text x="150" y="140" font-size="130" text-anchor="middle" fill="${shapeConstructor.text_color}">`)
        .replace('<rect width="100%" height="100%" fill="red" /> ', `<rect width="100%" height="100%" fill="${shapeConstructor.shape_color}" />`)
        .replace('SVG',`${shapeConstructor.text}`);
    
    fs.writeFile('./examples/sqareLogo.svg', modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated squareLogo.svg!`);
    });

    return modifiedData;
}

function modifyTriangles(shapeConstructor) {
    const testing = fs.readFileSync( './examples/triangle.svg' , 'utf8');      
    const modifiedData = testing
        .replace('<text x="125" y="150" font-size="60" text-anchor="middle" fill="white">', `<text x="125" y="150" font-size="60" text-anchor="middle" fill="${shapeConstructor.text_color}">`)
        .replace('<polygon points="123,10 227.8,190 20,190" style="fill:lime" />', `<polygon points="123,10 227.8,190 20,190" style="fill:${shapeConstructor.shape_color}" />`)
        .replace('SVG',`${shapeConstructor.text}`);

    fs.writeFile('./examples/triangleLogo.svg', modifiedData, 'utf8', (err) => {            
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated triangleLogo.svg!`);
    });

    return modifiedData;
}

async function init() {
    try {
        const response = await inquirer.prompt([
            {
                type: 'input', 
                name: 'logo_text', 
                message: `${questions[0]}`
            },
            {
                type: 'input', 
                name: 'text_color', 
                message: `${questions[1]}`
            },
            {
                type: 'list', 
                name: 'shape', 
                message: `${questions[2]}`,
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                type: 'input', 
                name: 'shape_color', 
                message: `${questions[3]}`
            },
        ]);

        const shape = response.shape;
        const shapeType = new shapeSelected.Shapes(shape);
        const shapeConstructor = new shapeType(response.logo_text, response.text_color, response.shape_color);

        if (shape === 'Circle') {
            modifyCircles(shapeConstructor);
        } else if (shape === 'Square') {
            modifySquares(shapeConstructor);
        } else if (shape === 'Triangle') {
            modifyTriangles(shapeConstructor);
        }

    } catch (err) {
        console.error(err);
    }
}

init();

module.exports = {
    modifyCircles,
    modifySquares,
    modifyTriangles
}