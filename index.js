function findMatching(drivers, string){
    let driversArray = [];

    drivers.filter(driver => {
        if(driver.toLowerCase() === string.toLowerCase())
            driversArray.push(driver);
    });

    return driversArray;
}

function fuzzyMatch(drivers, string){
    let driversArray = [];

    drivers.filter(driver => {
        if(driver.slice(0, string.length) === string)
            driversArray.push(driver);
    });

    return driversArray;
}

function matchName(drivers, string){
    let driversArray = [];

    drivers.filter(driver => {
        if(driver.name === string)
            driversArray.push(driver);
    });

    return driversArray;
}