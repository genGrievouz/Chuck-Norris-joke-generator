export const getCategory = () => {
    const id = "demo-controlled-open-select";
    let val = decodeURI(document.getElementById(id).innerHTML);
    val = val.slice(0,0) + val.slice(1);
    return val;
}
