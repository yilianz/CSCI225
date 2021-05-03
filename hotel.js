/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var hotel={
    name: 'ddd',
    room: 40,
    booked: 25,
    display: function(){
        return this.name;
    }
};

//alert(hotel.display());
//alert(typeof hotel.name);
//var test = new Array();


var guestGroup = new Array();
document.getElementById('submit').addEventListener('click',reservation);
document.getElementById('lists').addEventListener('click',displayR);


function reservation(){
    //collect the form information;
    var guest={
        name: document.getElementById('name').value,
        numberofGuest: document.getElementById('num').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value,
        room: document.getElementById('room').value,
        display: function(){
            var result=this.name +"  reserved " + this.room + " from "+ this.checkin+" to " + this.checkout;
            return result;
        }
    };
    
    //put it in the group
    guestGroup.push(guest);
    console.log(guest.display());
    
    document.getElementById('message').innerHTML= "Thank you for your reservation! "+ guest.display();
}

function displayR(){
    var resulttable = document.getElementById('result');
    var output="<table>";
    for(var i in guestGroup){
        var guest = guestGroup[i];
        var thisrow = '<tr>'+"<td>"+guest.name+"</td>"+"<td>"+guest.checkin+"</td>"+"<td>"+guest.checkout+"</td>"+"<td>"+guest.room+"</td>"+"</tr>";
        output += thisrow;
    }
    output +="</table>";
    resulttable.innerHTML = output;
}