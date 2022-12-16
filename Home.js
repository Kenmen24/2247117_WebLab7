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
        {name:'God of War: Ragnorok',dor:new Date("January 31 2022"),rating:"5",price:5250},
        {name:'Call of Duty: Modern Warfare 2',dor:new Date("February 12 2022"),rating:"5",price:4900},
        {name:'The Calisto Protocol',dor:new Date("February 21 2022"),rating:"4.5",price:6400},
        {name:'Need for Speed: Unbound',dor:new Date("March 10 2022"),rating:"4.3",price:3970},
        {name:'FIFA 23',dor:new Date("September 30 2022"),rating:"5",price:3880},
        {name:'Gran Turismo 7',dor:new Date("May 01 2022"),rating:"4.1",price:4680},
        {name:'Horizon Forbidden West',dor:new Date("November 14 2022"),rating:"5",price:4499},
        {name:'Resident Evil: Village',dor:new Date("June 09 2022"),rating:"3.7",price:5590},
        {name:'Returnal',dor:new Date("March 18 2022"),rating:"3.9",price:3999},
        {name:'Hogwarts Legacy',dor:new Date("December 29 2022"),rating:"5",price:6899}
    ];
    $scope.items = items;
    $scope.rowlimit = 10;
});