// Selection Sort 
{
    function Selection_sort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let min_index = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
            if (min_index !== i) {
                [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
            }
        }
        return arr;
    }
    console.log(Selection_sort([3, 1, 7, 11, 2, 24, 8, 8, 11, 3, 10]));
}