var map = function(arr, fn) {
    var arra=[];

    for(i=0;i<arr.length;i++){
        arra[i]=fn(arr[i],i);
    }

    return arra;
};