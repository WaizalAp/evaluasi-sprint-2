function fpb(a,b){
    return (b==0) ? a : (fpb(b, a % b));
  }
  
  function kpk(a,b){
    return (a / fpb(a,b)) * b;
  }
  document.write(`fpb dan kpk dari 120 dan 240`+ "<br><br>");
  document.write('fpb nya : ' + fpb(120,240) + "<br>");
  document.write('kpk nya : ' + kpk(120,240));
  
  
  // hasil : 
  // fpb dan kpk dari 120 dan 240
  
  // fpb nya : 120
  // kpk nya : 240