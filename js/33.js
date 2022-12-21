var text = prompt("enter string");
var word = prompt("enter string");
var x = text.split(" ");
var y = 0;
i=0
while(i<x.length)
{
    if(x[i]==word)
    {
        y++;
    }
	i++
}
document.write(y);