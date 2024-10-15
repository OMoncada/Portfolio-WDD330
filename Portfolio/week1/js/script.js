let calculator = {
    display: document.getElementById('display'),

    // Clears the display
    clear() {
        this.display.value = '';
        return this;
    },

    // Appends a character to the display
    append(value) {
        this.display.value += value;
        return this;
    },

    // Deletes the last character from the display
    backspace() {
        this.display.value = this.display.value.slice(0, -1);
        return this;
    },

    // Calculates the result
    calculate() {
        try {
            this.display.value = eval(this.display.value);
        } catch (e) {
            this.display.value = 'Error';
        }
        return this;
    }
};
