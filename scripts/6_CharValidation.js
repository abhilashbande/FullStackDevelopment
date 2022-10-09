function validateAge(ch) {
	var no = "1234567890";
	
	for(var i =0; i< ch.length; i++)
	{
		if(no.indexOf(ch.charAt(i)) == -1)
		{
			alert("Invalid character...")
			document.getElementById("age").select();
			break;
		}
	}
}