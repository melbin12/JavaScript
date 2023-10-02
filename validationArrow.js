
// phone=(phone)=>{
//     if (isNaN(phone) || phone.length < 10 || phone.length > 10) {
//         alert(phone+" please enter a valid phone number");
//         return false;
//       }
//       else 
//       {
//         return true;
//       }
// }
// console.log(phone(1234567899))


// const phone=(num)=>{
//    return num.length==10?`${num} is a mobile number`:`${num} it is not number `;
// }

// console.log(phone(123456543223))

//.................................................//

//w.a.p to check whether given word start with q using arrow function

const word = (letter)=>{
   return letter.startsWith('q')||letter.startsWith('Q')?`${letter} started Q`:`${letter} not start q`
}

console.log(word('qdhbjsb'));