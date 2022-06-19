//wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    //select the submit button and input to beused later
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    //disable submit button by default:
    submit.disabled = true;
    //listen for input to be typed into the input field
    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }
    //listen for submission of form
    document.querySelector('form').onsubmit = () => {
        //find the task the user just submitted
        const task = newTask.value;
        //create a list item for the new task and add the task to it
        const li = document.createElement('li');
        li.innerHTML = task;
        //add new element to our unordered list:
        document.querySelector('#tasks').append(li);
        //clear out input value
        newTask.value = '';
        //disable the submit button again
        submit.disabled = true;
        //stop form from submitting
        return false;
    };
});