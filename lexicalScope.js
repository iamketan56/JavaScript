function outer()
{
    let name = 'Ketan'
    function inner()
    {
       // name = 'Vijay'
        function extrainner()
        {
            console.log(name.toUpperCase())
        }
        extrainner()
    }
    inner()
}
outer()