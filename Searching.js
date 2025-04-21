// Linear Search 
{
    function linear_search(arr, key) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                return i;
            }
        }
        return -1;
    };

    let my_arr = [1, 2, 3, 4, 7, 11];
    let my_key1 = 7;
    let my_key2 = 30
    console.log(linear_search(my_arr, my_key1));
    console.log(linear_search(my_arr, my_key2));
}

// Binary Search 

//Iterative Binary Search 
{
    function iter_binary_search(arr, key) {
        let low = 0;
        let high = arr.length - 1;
        let mid;
        while (high >= low) {
            mid = Math.floor((low + high) / 2)

            if (key < arr[mid]) {
                high = mid - 1;
            }
            if (key > arr[mid]) {
                low = mid + 1;
            }
            if (key === arr[mid]) {
                return mid;
            }
        }
        return -1;
    }

    let my_arr = [10, 20, 30, 40, 50];
    let my_key1 = 40;
    let my_key2 = 17;
    console.log(iter_binary_search(my_arr, my_key1));
    console.log(iter_binary_search(my_arr, my_key2));
}

// Recursive Binary Search 
{
    function recur_binary_search(arr, low, high, key) {
        if (high >= low) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === key) {
                return mid;
            }
            if (arr[mid] > key) {
                return recur_binary_search(arr, low, mid - 1, key);
            }
            if (arr[mid] < key) {
                return recur_binary_search(arr, mid + 1, high, key);
            }

        }
        return -1;
    }
    let my_arr = [3, 4, 5, 6, 11];
    let my_key1 = 6;
    let my_key2 = 7;
    console.log(recur_binary_search(my_arr, 0, my_arr.length - 1, my_key1));
    console.log(recur_binary_search(my_arr, 0, my_arr.length - 1, my_key2));
}