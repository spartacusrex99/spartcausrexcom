
/**
 * Write the header
 */
function writeHeader(baseurl){
	
	var gap = "&nbsp;&nbsp;&nbsp;";
	
	document.write(""
		+"<center><br><h1>Spartacus Rex</h1>"
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"index.html\";'>Home</button>"+gap
		+"<button class='solobutton' onclick='location.href=\"https://spartacusrex.com:8888/public/\";'>Public</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"runanode.html\";'>Run a node</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"blog.html\";'>Blog</button>"+gap
		+"<button class='solobutton' onclick='location.href=\""+baseurl+"downloads.html\";'>Downloads</button>"+gap
		+"<br><br>"
		+"");
} 

/**
 * Write the footer
 */
function writeFooter(){
	document.write("</center>");
} 