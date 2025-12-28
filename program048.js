class Demo
{
    constructor(A, B)       // Parametrised
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside constructor");
    }
}

function main()
{
    let obj = new Demo(10,11);

    console.log(obj.No1);
    console.log(obj.No2);
}

main();