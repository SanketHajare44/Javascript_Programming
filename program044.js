function Maximum(Brr)
{
    let iCnt = 0;
    let iMax = Brr[0];

    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(Brr[iCnt] > iMax)
        {
            iMax = Brr[iCnt];
        }
    }

    return iMax;
}

function main()
{
    const Arr = [10,20,30,40,50];
    let iRet = 0;

    iRet = Maximum(Arr);

    console.log("Maximum element is : ",iRet);
}

main();