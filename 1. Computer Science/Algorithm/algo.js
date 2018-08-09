var AA = [234,45634,23,41,2345,34,23,1,4,3,6,234,4536,55,234,23,456,45,234,1,856,9,67,56,7]; 


function swap(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function QuickSort(arr){
  if(arr.length == 0){
    returnp[];
  }

  var middel = arr[0];
  var len = arr.length;
  var left = [], rigth = [];

  for(var i = 1; i < len; ++i){
    if( arr[i] < middle ){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return QuickSort(left).concat(middle, QuickSort(right));
}


