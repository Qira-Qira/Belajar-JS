let random = [22,1,5,66,7,9,15,3,4,8,10,11,12,13,14,16,17,18,19,20,21];

for(let i = 0; i < random.length; i++) {
    console.log(random.sort((a,b) => a-b)[i]);
}