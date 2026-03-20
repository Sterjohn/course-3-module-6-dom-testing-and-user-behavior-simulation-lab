function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const newElement = document.createElement('p');
  newElement.textContent = text;
  container.appendChild(newElement);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

function simulateClick(containerId, text) {
  const container = document.getElementById(containerId);
  const newElement = document.createElement('p');
  newElement.textContent = text;
  container.appendChild(newElement);
}

function handleFormSubmit(formId, containerId) {
  const input = document.getElementById('user-input');
  const errorMessage = document.getElementById('error-message');

  if (!input.value) {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return;
  }

  const container = document.getElementById(containerId);
  const newElement = document.createElement('p');
  newElement.textContent = input.value;
  container.appendChild(newElement);
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};