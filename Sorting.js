// Selection Sort 
{
    function selectionSort(arr) {
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
    console.log(selectionSort([3, 1, 7, 11, 2, 24, 8, 8, 11, 3, 10]));
}

//Bubble Sort
{
    function bubbleSort(arr) {
        let swap;
        for (let i = 0; i < arr.length - 1; i++) {
            swap = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swap = true;
                }
            }
            if (swap === false) {
                break;
            }
        }
        return arr;
    }

    let my_arr = [3, 2, 5, 6, 0, 1, 13, 4, 27, 81, 7];
    console.log(bubbleSort(my_arr));
}

// Insertion Sort 
{
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    }
    let myArr = [2, 1, 5, 2, 7, 11, 45, 36, 4, 9, 70];
    console.log(insertionSort(myArr));
}

// Merge Sort
{
    function merge(arr, low, mid, high) {
        let temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            }
            else {
                temp.push(arr[right]);
                right++;
            }
        }
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
        return arr;
    }

    function mergeSort(arr, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2);

        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high)
        merge(arr, low, mid, high);
    }
    let myArr = [2, 1, 3, 4, 2, 1, 45, 2, 10, 22]
    mergeSort(myArr, 0, myArr.length - 1);
    console.log(myArr);
}

// Quick Sort 
{

    function partition(arr, low, high) {


        let pivot = arr[high];

        let i = low - 1;

        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }

        swap(arr, i + 1, high);
        return i + 1;
    }


    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function quickSort(arr, low, high) {
        if (low < high) {


            let pi = partition(arr, low, high);


            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }


    let arr = [10, 7, 8, 9, 1, 5];
    let n = arr.length;


    quickSort(arr, 0, n - 1);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }

}

// Quick Sort
{
    function partition(arr, low, high) {
        let pivot = arr[low];
        let i = low;
        let j = high;

        while (i <= j) {
            while (i <= high && arr[i] <= pivot) {
                i++;
            }
            while (j >= low && arr[j] > pivot) {
                j--;
            }
            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[low], arr[j]] = [arr[j], arr[low]];
        return j;
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            let pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    let myArr = [3, 1, 2, 5, 1, 7];
    quickSort(myArr, 0, myArr.length - 1);
    console.log(myArr);
}
