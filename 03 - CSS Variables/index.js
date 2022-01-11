const inputs = document.querySelectorAll('.controls input');
inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate));
inputs.forEach(inputs => inputs.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    if (this.id === "spacing"){
        document.documentElement.style.setProperty('--spacing', `${this.value}px`);
    } else if (this.id === "blur"){
        document.documentElement.style.setProperty('--blur',`${this.value}px`);
    } else if (this.id === "base"){
        document.documentElement.style.setProperty('--base',`${this.value}`);
    }
}

/*
more concise way of doing it
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
*/