angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {name:'Grocery Items',doa:new Date("January 31 2022"),location:"Bangalore",rating:"5 Star",price:2000},
        {name:'Oral Care',doa:new Date("February 12 2022"),location:"Bangalore",rating:"4 star",price:1500},
        {name:'Health Medicines',doa:new Date("February 21 2022"),location:"Kerala",rating:"4.5 star",price:1800},
        {name:'Toys',doa:new Date("March 10 2022"),location:"Mysore",rating:"3 star",price:1200},
        {name:'Shoes',doa:new Date("January 12 2022"),location:"Bhubaneshwar",rating:"5 star",price:2500},
        {name:'Clothes',doa:new Date("April 1 2022"),location:"Puri",rating:"4.1 star",price:1600},
        {name:'Cleaning Products',doa:new Date("April 2 2022"),location:"Mumbai",rating:"5 star",price:5000}
    ];
    $scope.items = items;
    $scope.rowlimit = 7;
});