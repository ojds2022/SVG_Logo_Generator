const index = require('../index.js');
const shapeSelected = require('./shapes.js');

describe('shape', () => {
    const testCases = [
        {
            shape: 'Circle',
            color: 'black',
            textColor: 'blue',
            text: 'fff',
            modifyFunction: index.modifyCircles,
            expectedOutput: '<svg version="1.1"\n    width="300" height="200"\n    xmlns="http://www.w3.org/2000/svg">\n    <polygon points="123,10 227.8,190 20,190" style="fill:black" />\n    <text x="125" y="150" font-size="60" text-anchor="middle" fill="blue">fff</text>\n</svg>\n'
        },
        {
            shape: 'Square',
            color: 'black',
            textColor: 'blue',
            text: 'fff',
            modifyFunction: index.modifyingSquares,
            expectedOutput: '"<svg version=\\"1.1\\"\\n    width=\\"300\\" height=\\"200\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\">\\n    <rect width=\\"100%\\" height=\\"100%\\" fill=\\"black\\" />\\n    <text x=\\"150\\" y=\\"140\\" font-size=\\"130\\" text-anchor=\\"middle\\" fill=\\"blue\\">fff</text>\\n</svg>\\n"'
        },
        {
            shape: 'Triangle',
            color: 'black',
            textColor: 'blue',
            text: 'fff',
            modifyFunction: index.modifyingTriangles,
            expectedOutput: '<svg version="1.1"\n    width="300" height="200"\n    xmlns="http://www.w3.org/2000/svg">\n    <polygon points="123,10 227.8,190 20,190" style="fill:black" />\n    <text x="125" y="150" font-size="60" text-anchor="middle" fill="blue">fff</text>\n</svg>\n'
        }
    ];

    testCases.forEach(({ shape, color, textColor, text, modifyFunction, expectedOutput }) => {
        it(`should make a ${shape.toLowerCase()} logo including the user's inputs`, () => {
            const shapeType = new shapeSelected.Shapes(shape);
            const shapeConstructor = new shapeType(text, textColor, color);
            expect(JSON.stringify(modifyFunction(shapeConstructor))).toEqual(expectedOutput);
        });
    });
});


// const index = require('../index.js');
// const shapeSelected = require('./shapes.js');

// describe('shape', () => {
//     describe('circle', () => {
//         it("should make a circle logo including the user's inputs", () => {
//             const shape = 'Circle';
//             const shapeType = new shapeSelected.Shapes(shape);
//             const shapeConstructor = new shapeType('fff', 'blue', 'black');
//             expect(index.modifyCircles(shapeConstructor)).toEqual('<svg version=\"1.1\"\n    width=\"300\" height=\"200\"\n    xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"123,10 227.8,190 20,190\" style=\"fill:black\" />\n    <text x=\"125\" y=\"150\" font-size=\"60\" text-anchor=\"middle\" fill=\"blue\">fff</text>\n</svg>\n');
//         });
//     });

//     describe("square", () => {
//         it("should make a square logo with what the user inputs", () => {
//             const shape = "Square";
//             const shapeType = new shapeSelected.Shapes(shape);
//             const shapeConstructors = new shapeType("fff","blue","black");
//             expect(JSON.stringify(index.modifyingSquares(shapeConstructors))).toEqual('\"<svg version=\\\"1.1\\\"\\n    width=\\\"300\\\" height=\\\"200\\\"\\n    xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <rect width=\\\"100%\\\" height=\\\"100%\\\" fill=\\\"black\\\" />\\n    <text x=\\\"150\\\" y=\\\"140\\\" font-size=\\\"130\\\" text-anchor=\\\"middle\\\" fill=\\\"blue\\\">fff</text>\\n</svg>\\n\"');
//         });
//     });

//     describe("triangle", () => {
//         it("should make a triangle logo with what the user inputs", () => {
//             const shape = "Triangle";
//             const shapeType = new shapeSelected.Shapes(shape);
//             const shapeConstructors = new shapeType("fff","blue","black");
//             expect(index.modifyingTriangles(shapeConstructors)).toEqual('<svg version=\"1.1\"\n    width=\"300\" height=\"200\"\n    xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"123,10 227.8,190 20,190\" style=\"fill:black\" />\n    <text x=\"125\" y=\"150\" font-size=\"60\" text-anchor=\"middle\" fill=\"blue\">fff</text>\n</svg>\n');
//         });
//     });
// });