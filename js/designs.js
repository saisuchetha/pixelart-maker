// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const submit = document.getElementById('gridValueSubmit');
submit.addEventListener('click', function () {
    let canvas = document.getElementById('gridCanvas');
    canvas.innerHTML = '';
    makeGrid();
});


function makeGrid() {
    let color;
    let colorPicker = document.getElementById('colorPicker');
    color = document.getElementById('colorPicker').value;
    colorPicker.addEventListener('change', function () {
        color = document.getElementById('colorPicker').value;
    });

    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;

    if (height > 100) {
        height = 100;
    }
    if (width > 100) {
        width = 100;
    }

    let gridCanvas = document.getElementById('gridCanvas');
    let areaNode = document.createElement('TBODY');
    areaNode.setAttribute('id', 'drawArea');
    gridCanvas.appendChild(areaNode);

    let area = document.getElementById('drawArea');

    for (let i = 0; i < height; i++) {
        let rowNode = document.createElement('TR');
        rowNode.setAttribute('class', 'gridRow');
        area.appendChild(rowNode);
    }

    let c = area.children;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < c.length; j++) {
            let columnNode = document.createElement('TD');
            columnNode.setAttribute('class', 'gridColumn');
            c[j].appendChild(columnNode);
        }
    }


    let a = document.getElementsByTagName("td");
    for (let x = 0; x < a.length; x++) {
        a[x].addEventListener('click', function () {
            if (a[x].style.backgroundColor === '' || a[x].style.backgroundColor === 'white') {
                a[x].style.backgroundColor = color;
            }
            else
                a[x].style.backgroundColor = 'white';
        })
    }

    const reset = document.getElementById('gridValueReset');
    reset.addEventListener('click', function () {
        for (let x = 0; x < a.length; x++) {
            a[x].style.backgroundColor = 'white';
        }
    });
  function toggleCellColor(cellClicked) {
    let colorPicked = $("#colorPicker").val(); // gets color from Color Picker
    let cellColor = cellClicked.css("background-color"); // gets color of the clicked Cell
    let fillReady = cellClicked.hasClass("fillReady"); // checks whether "draw" Button is Clicked or not
    let eraseReady = cellClicked.hasClass("eraseReady"); // checks whether "erase" Button is Clicked or not
    if (isMousedown === true && cellColor === "transparent" && fillReady) {
      cellClicked.css("background-color", colorPicked); // sets cell color from transparent to picked color
    } else if (
      isMousedown === true &&
      cellColor !== "transparent" &&
      eraseReady
    ) {
      cellClicked.css("background-color", "transparent"); // resets cell color to transparent
    }
  }
  // Clears Grid (or Table) from Canvas on Clicking "Grid Off!" Button
  formElement.on("click", "#gridOff", function(event) {
    event.preventDefault();
    grid.empty();
    buttonElement.removeClass("active");
    $(this).addClass("active");
  });
}