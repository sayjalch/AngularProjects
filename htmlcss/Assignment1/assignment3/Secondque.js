var srtt = function (element) {
    console.log(element.sort(function (a, b) { return a - b; }));
};
srtt([10, 8, 2, 4, 56]);
