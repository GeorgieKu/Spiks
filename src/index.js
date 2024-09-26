import noUiSlider from "nouislider";

let headerCheckbox = document.querySelectorAll('.header__checkbox');

headerCheckbox.forEach(function (checkbox) {
  let input = checkbox.querySelector('input');
  checkbox.addEventListener('click', function () {
    headerCheckbox.forEach(function (otherCheckbox) {
      let otherInput = otherCheckbox.querySelector('input');
      otherCheckbox.classList.remove('header__checkbox_active');
      otherInput.checked = false;
    });
    input.checked = true;
    checkbox.classList.add('header__checkbox_active');
  });
});

let headerSlider1 = document.getElementById('header-slider-1');
let slider1input1 = document.getElementById('slider-1-input-1');
let slider1input2 = document.getElementById('slider-1-input-2');
let slider1inputs = [slider1input1, slider1input2];

noUiSlider.create(headerSlider1, {
  start: [204, 500],
  connect: true,
  tooltips: [{
      to: function (value) {
        return Math.round(value) + '$';
      }
    },
    {
      to: function (value) {
        return Math.round(value) + '$';
      }
    }
  ],
  range: {
    'min': 204,
    'max': 500
  }
});

headerSlider1.noUiSlider.on('update', function (values, handle) {
  slider1inputs[handle].value = Math.round(values[handle]) + ' $';
});

slider1inputs.forEach((input, handle) => {
  input.addEventListener('input', function () {
    let rawValue = input.value.replace('$', '').replace(' ', '').trim();
    let validValue = rawValue.replace(/[^\d]/g, '').slice(0, 3);
    if (validValue) {
      let value = parseFloat(validValue);
      if (value >= 204 && value <= 500) {
        headerSlider1.noUiSlider.setHandle(handle, value);
      }
    }
    input.value = validValue;
  });
  input.addEventListener('blur', function () {
    if (!input.value.includes('$')) {
      input.value = input.value + ' $';
    }
  });
});

let headerSlider2 = document.getElementById('header-slider-2');
let slider2input1 = document.getElementById('slider-2-input-1');

noUiSlider.create(headerSlider2, {
  start: [65],
  connect: [true, false],
  tooltips: {
    to: function (value) {
      return Math.round(value) + ' %';
    },
    from: function (value) {
      return Number(value.replace(' %', ''));
    }
  },
  range: {
    'min': 0,
    'max': 100
  }
});

headerSlider2.noUiSlider.on('update', function (values, handle) {
  slider2input1.value = Math.round(values[handle]) + ' %';
});

slider2input1.addEventListener('input', function () {
  let rawValue = slider2input1.value.replace('%', '').replace(' ', '').trim();
  let validValue = rawValue.replace(/[^\d]/g, '').slice(0, 3);
  if (validValue) {
    let value = parseFloat(validValue);
    if (value >= 0 && value <= 100) {
      headerSlider2.noUiSlider.setHandle(0, value);
    } else if (value > 100) {
      headerSlider2.noUiSlider.setHandle(0, 100);
      slider2input1.value = '100 %';
    }
  } else {
    slider2input1.value = '';
  }
  if (validValue) {
    slider2input1.value = validValue;
  }
  slider2input1.value = validValue;
});

slider2input1.addEventListener('blur', function () {
  if (!slider2input1.value.includes('%')) {
    slider2input1.value = slider2input1.value + ' %';
  }
});

let headerSlider3 = document.getElementById('header-slider-3');
let slider3input1 = document.getElementById('slider-3-input-1');

noUiSlider.create(headerSlider3, {
  start: [65],
  connect: [true, false],
  tooltips: {
    to: function (value) {
      return Math.round(value) + ' %';
    },
    from: function (value) {
      return Number(value.replace(' %', ''));
    }
  },
  range: {
    'min': 0,
    'max': 100
  }
});

headerSlider3.noUiSlider.on('update', function (values, handle) {
  slider3input1.value = Math.round(values[handle]) + ' %';
});

slider3input1.addEventListener('input', function () {
  let rawValue = slider3input1.value.replace('%', '').replace(' ', '').trim();
  let validValue = rawValue.replace(/[^\d]/g, '').slice(0, 3);
  if (validValue) {
    let value = parseFloat(validValue);
    if (value >= 0 && value <= 100) {
      headerSlider3.noUiSlider.setHandle(0, value);
    } else if (value > 100) {
      headerSlider3.noUiSlider.setHandle(0, 100);
      slider3input1.value = '100 %';
    }
  } else {
    slider3input1.value = '';
  }
  if (validValue) {
    slider3input1.value = validValue;
  }
});

slider3input1.addEventListener('blur', function () {
  if (!slider3input1.value.includes('%')) {
    slider3input1.value = slider3input1.value + ' %';
  }
});

let filterBtn = document.getElementById('filterBtn');
let headerFlex = document.querySelector('.header__flex-2')
let headerItemBtns = document.querySelectorAll('.header__item-btn')

filterBtn.addEventListener('click', function () {
  headerFlex.classList.toggle('header__filter_active')
})

headerItemBtns.forEach(function (headerItemBtn) {
  headerItemBtn.addEventListener('click', function () {
    headerFlex.classList.remove('header__filter_active');
  });
});

function openAcc(toggleButton, content, toggleArrow) {
  toggleButton.addEventListener('click', function () {
    content.classList.toggle('open');
    toggleArrow.classList.toggle('rotate');

  });
}

document.addEventListener('DOMContentLoaded', function () {
  let toggleButtons = document.querySelectorAll('.acc');
  let contents = document.querySelectorAll('.acc__content');

  toggleButtons.forEach((toggleButton, index) => {
    let toggleArrow = toggleButton.querySelector('svg');
    openAcc(toggleButton, contents[index], toggleArrow);
  });
});

let accCheckbox = document.querySelectorAll('.acc__custom-checkbox');
let headerList2 = document.querySelector('.header__list-2');

function createheaderItem(checkbox) {
  let input = checkbox.querySelector('input');
  let checkboxText = checkbox.querySelector('.acc__text').textContent.trim();
  let newItem = document.createElement('li');
  newItem.classList.add('header__item-2');
  newItem.innerHTML = `
        <span>${checkboxText}</span>
        <button class="header__btn" aria-label='delete'>
            <svg width="7" height="7"><use xlink:href="./assets/sprites/default/sprite.svg#Cancell"></use></svg>
        </button>
    `;
  newItem.querySelector('.header__btn').addEventListener('click', function () {
    headerList2.removeChild(newItem);
    input.checked = false;
    checkbox.classList.remove('acc__custom-checkbox_active');
    delete checkbox.dataset.addedItem;
  });
  return newItem;
}

accCheckbox.forEach(function (checkbox) {
  let input = checkbox.querySelector('input');

  if (input.checked) {
    checkbox.classList.add('acc__custom-checkbox_active');
    let newItem = createheaderItem(checkbox);
    headerList2.appendChild(newItem);
    checkbox.dataset.addedItem = newItem.outerHTML;
  }
  checkbox.addEventListener('click', function () {
    input.checked = !input.checked;

    if (input.checked) {
      checkbox.classList.add('acc__custom-checkbox_active');
      let newItem = createheaderItem(checkbox);
      headerList2.appendChild(newItem);
      checkbox.dataset.addedItem = newItem.outerHTML;
    } else {
      checkbox.classList.remove('acc__custom-checkbox_active');
      let addedItemHTML = checkbox.dataset.addedItem;
      let allItems = headerList2.querySelectorAll('.header__item-2');
      allItems.forEach(item => {
        if (item.outerHTML === addedItemHTML) {
          headerList2.removeChild(item);
        }
      });
      delete checkbox.dataset.addedItem;
    }
  });
});