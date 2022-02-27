let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = () => {
    sumValue = 0
    for (let key in salaries) {
        sumValue += salaries[key]
    }
    return sumValue
}

console.log(sum())