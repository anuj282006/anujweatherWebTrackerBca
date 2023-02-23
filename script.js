const update=new XMLHttpRequest();

update.onload=function()
{
    
    const struct=JSON.parse(this.response);
    const current=struct.current;

    console.log(struct);
    const display=document.querySelector('#display');
    
    display.children[0].textContent="country:  " + struct.location.country;
    display.children[1].textContent="region: " +struct.location.region;
    display.children[2].textContent="latitude: " +struct.location.lat;
    display.children[3].textContent="longitude: "+struct.location.lon;
    display.children[4].textContent="temprature: "+current.temperature+"  C";
    display.children[5].textContent="pressure: "+current.pressure+"  mbar";
    display.children[6].textContent="visiblity: "+current.visibility+" km";
    display.children[7].textContent="humidity: " +current.humidity+"%";

}
update.onerror= function()
{
    console.log("error");
}





const submit=document.querySelector('#submit');
submit.addEventListener("click",()=>{
    const input=document.querySelector('#input-bar');
    const x=input.value;
    const y="http://api.weatherstack.com/current?access_key=695863996c4fa2d763be22800ed586d2&query=";
const url=y+x;
update.open("GET",url);
update.send();

})
