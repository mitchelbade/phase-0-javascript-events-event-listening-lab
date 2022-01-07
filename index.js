function addingEventListener() {
  const input = document.getElementById('input');

  const clickAlert = clickAlert => alert('I was clicked!');
  
  input.addEventListener('click', clickAlert);
}

