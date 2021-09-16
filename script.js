// Area of a Trapezoid

// Event Listeners
document.getElementById("calcBtn").addEventListener("click", getArea);

// Event Function
function getArea() {
    // Input
    let aSide = +document.getElementById("aSideIn").value;
    let bSide = +document.getElementById("bSideIn").value;
    let trapHeight = +document.getElementById("trapHeightIn").value;

    // Process
    let resultString = 0.5 * (aSide + bSide) * trapHeight;

    // Output
    document.getElementById("result").innerHTML = "The area of the trapezoid is: " + resultString;
    document.getElementById("resultDiv").style.display = 'block';
}

document.getElementById("clearBtn").addEventListener("click", refreshPage);

function refreshPage() {
    location.reload()
}