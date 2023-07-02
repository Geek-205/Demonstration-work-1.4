function parity()
{
    var a = parseInt(document.getElementById("nomber1").value);
    var b = parseInt(document.getElementById("nomber2").value);
    var result = [];

    for (var i = a; i <= b ; i++)
    {
        if(i % 2 == 0)
        {
            result.push(i);
        }
    }
    const outputDiv = document.querySelector('#Conclusion');

    outputDiv.textContent = result.join(', ');
}