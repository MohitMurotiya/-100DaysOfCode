/* Return NodeList which is not an array, have couple of methods only like forEach*/
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    /* this.dataset will give all the data- values in object */
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));