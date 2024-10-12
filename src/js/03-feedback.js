const STORAGE_KEY = 'feedback-form-state';
const formIn = document.querySelector('.feedback-form');
let formData = {};
formIn.addEventListener('input', _.throttle(inputFunc, 500));
formIn.addEventListener('submit', submitFunc);

start();

function inputFunc(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function submitFunc(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function start() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      formData = JSON.parse(data);
      Object.entries(formData).forEach(([key, value]) => {
        formIn[key].value = value;
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
