function getSecondLargest(nums) {

    const max = Math.max(...nums);
    nums = nums.filter(num => num !== max);
    return Math.max(...nums);
    }
