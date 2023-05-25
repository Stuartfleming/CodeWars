function solve(s){let count = 0
  for (let i = 0; i < s.length; ++i) { let charCode = s.charCodeAt(i);
        if (charCode < 65 || charCode > 90) { count -= 1} else {count += 1}};
    if (count >= 1) { return s.toUpperCase()} else {return s.toLowerCase()}
   }