
/**
 * Write the header
 */
function writeHeader(){
	
	var gap = "&nbsp;&nbsp;&nbsp;";
	
	document.write(""
		+"<center><br><h1>Spartacus Rex</h1>"
		+"<button class='solobutton' onclick='location.href=\"index.html\";'>Home</button>"+gap
		+"<button class='solobutton' onclick='location.href=\"runanode.html\";'>Run a node</button>"+gap
		+"<button class='solobutton' onclick='location.href=\"downloads.html\";'>Downloads</button>"+gap
		//+"<button class='solobutton' onclick='location.href=\"blog.html\";'>Blog</button>"+gap
		+"<br><br>"
		+"");
} 

/**
 * Write the footer
 */
function writeFooter(){
	document.write("</center>");
} 