class Shapes {
    constructor(selectedShape) {

        class Circle {
            constructor(text, text_color, shape_color) {
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
        }

        class Square {
            constructor(text, text_color, shape_color) {
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
        }

        class Triangle {
            constructor(text, text_color, shape_color) {
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
        }

        if (selectedShape === 'Circle') {
            return Circle;
        } else if (selectedShape === 'Square') {
            return Square;
        } else if (selectedShape === 'Triangle') {
            return Triangle;
        } else {
            return null;
        }
    }
}

module.exports = {
    Shapes
}