function isvalid(username, password)
{
    let l = password.length;
    if (l == 8 && password!=username  && password.indexOf(' ')==-1)
    {
        return true;
    }
    else
    {
        return false;
     }
}
  console.log(isvalid('ketan','sharm ji'))