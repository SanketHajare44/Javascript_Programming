function Display(Brr)
{
    let iCnt = 0;

    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        console.log(Brr[iCnt]);
    }
}

function main()
{
    const Arr = [10,20,30,40,50];

    Display(Arr);
}

main();