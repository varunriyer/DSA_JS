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