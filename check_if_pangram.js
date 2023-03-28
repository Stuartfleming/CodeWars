function isPangram(string){
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of string.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false
}
