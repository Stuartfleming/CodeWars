function cockroachSpeed(s) {
  let mPerHour = s * 1000
  let cmPerhour = mPerHour * 100
  let cmPerMin = cmPerhour / 60
  let cmPerSec = cmPerMin / 60
  
return Math.floor(cmPerSec);
  
}