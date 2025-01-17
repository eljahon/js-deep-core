const MyTypeof = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}


var findMedianSortedArrays = function(nums1, nums2) {
    const num = nums1.concat(nums2).sort((a,b) => a-b);
    const all = num.length;
    const mid =num.length/2;
    return all === mid ? ((num[mid]+num[mid-1])/2).toFixed(5) : num[mid]; 
};

console.log(findMedianSortedArrays([1,2],[3,4]));
