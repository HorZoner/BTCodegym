function show(op) {
    document.getElementById("display").value += op;
}
function answer() {
    document.getElementById("display").value;
    let input = document.getElementById("display");
    let answer = eval(input.value);
    input.value = answer
}