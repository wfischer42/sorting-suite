function quicksort(array) {
  switch (array.length) {
    case 0:
      return array;
      break;
    case 1:
      return array;
      break;
    case 2:
      return sorted_pair(array);
      break;
    default:
      var pivot_index = Math.floor(array.length/2);
      var pivot = array[pivot_index];
      var lower_array = quicksort(pivot_filter(array, pivot, "lt"));
      var pivot_array = pivot_filter(array, pivot, "eq");
      var upper_array = quicksort(pivot_filter(array, pivot, "gt"));
      return lower_array.concat(pivot_array, upper_array);
  }
}

function sorted_pair(array) {
  if (array[0] > array[1]) {
    [array[0], array[1]] = [array[1], array[0]];
  }
  return array;
}

function pivot_filter(array, pivot, comparison) {
  var filtered = array.filter(function(value, index, arr){
    if (comparison == "lt") {
      return value < pivot;
    } else if (comparison == "eq") {
      return value == pivot;
    } else if (comparison == "gt") {
      return value > pivot;
    }
  });
  return filtered;
}

module.exports = quicksort;
