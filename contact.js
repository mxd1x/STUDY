window.addEventListener('DOMContentLoaded', function () {
    adjustFormLayout();
  });
  
  window.addEventListener('resize', function () {
    adjustFormLayout();
  });
  
  function adjustFormLayout() {
    var container = document.querySelector('.container');
    var form = document.querySelector('#contact-form');
  
    if (container && form) {
      var containerWidth = container.offsetWidth;
      var formWidth = form.offsetWidth;
  
      if (formWidth > containerWidth) {
        form.style.width = '100%';
      } else {
        form.style.width = '';
      }
    }
  }
  