const addToLocal = (id) => {
    const arrStorage = getFromLocal();
    //we will get an array and empty array or null
    let newArray;
    if (arrStorage) {
        newArray = [...arrStorage];
        if (!arrStorage.find(arr => id == arr)) {
            newArray.push(id);
            localStorage.setItem("jobs", newArray);
        }

    } else {
        newArray = [];
        newArray.push(id);
        localStorage.setItem("jobs", newArray);
    }
}

const getFromLocal = () => {
    const stringStorage = localStorage.getItem("jobs");
    // const arrStorage = JSON.parse("[" + stringStorage + "]")
    if (stringStorage) {
        const arrStorage2 = (stringStorage.split(",")).map(a => parseInt(a))
        return arrStorage2;
    }
    //returns array not string
    
}
const getData = (id) => {
    fetch("jobs.json")
    .then(res => res.json())
    .then(data=> console.log(data))
}

export { addToLocal, getFromLocal, getData };
