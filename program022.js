function DisplayFactors(no)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt <= (no / 2); iCnt++)
    {
        if((no % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 20;
    
    DisplayFactors(iValue);
}

main();