function assending(n) {
    let a = '';
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < i;j++)
        {
            a = a + '*';
        }
        a=a+"\n"
    }
    console.log(a);
}

function desending(n) {
    let a = '';
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n-i;j++)
        {
            a = a + '*';
        }
        a=a+"\n"
    }
    console.log(a);
}

assending(5)
desending(5)





