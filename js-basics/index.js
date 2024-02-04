function main (input) {

    const nums = input.split(' ');

    const num1 = Number(nums[0]);
    const num2 = Number(nums[1]);

    const rem = num1 % num2;

    console.log(rem);


}

main("5 3");