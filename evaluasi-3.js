var n = 9;

for(i=1;i<=n; i++){
    for(j=1; j<=n; j++){
        if(j==1 || j ==n||i == 1|| i==n){
            document.write(" 1 ");
        }else if(j==2 || j ==8||i == 2|| i==8){
          document.write(' A')
        }else if(j==3 || j ==7||i == 3|| i==7){
          document.write(' 3 ')
        }else if(j==4 || j ==6||i == 4|| i==6){
          document.write(' B ')
        }else{
          document.write(' 5 ')
        }
    }
    document.write("<br>");
}

//hasil :

// 1 1 1 1 1 1 1 1 1
// 1 A A A A A A A 1
// 1 A3 3 3 3 3 A 1
// 1 A3 B B B 3 A 1
// 1 A3 B 5 B 3 A 1
// 1 A3 B B B 3 A 1
// 1 A3 3 3 3 3 A 1
// 1 A A A A A A A 1
// 1 1 1 1 1 1 1 1 1