function numberWithCommas(x) {
    debugger
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
    numberWithCommas
};