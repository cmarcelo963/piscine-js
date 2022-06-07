const dogYears = (planetName, ageSeconds) => {
let earthYears = ageSeconds * 7;
let earthSeconds = 31557600;
    earthSeconds *= planetName === 'earth' ? 
        1 : 
        planetName === 'mercury' ?
             0.2408467 :
            planetName === 'venus' ?
                 0.61519726 :
                planetName === 'mars' ?
                     1.8808158 :
                    planetName === 'jupiter' ?
                         11.862615 :
                        planetName === 'saturn' ?
                             29.447498 :
                            planetName === 'uranus' ?
                                 84.016846 :
                                planetName === 'neptune' ?
                                     164.79132 : 
                                    "Wrong value";

    earthYears /= earthSeconds
    return earthYears = Math.round(earthYears * 100) / 100
}