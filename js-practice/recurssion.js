// var a = 1
// for(i=5;i>0;i--)
// {
//     a = a * i;
// }

// console.log(a)

function fac(n)
{
    if(n==0)
    {
        return 1;
    }
    return n * fac(n-1);
}

console.log(fac(5)); // 120