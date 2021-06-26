function checkPal(string){
    let str = 0, end = string.length - 1;
    while(str < end){
        if(string[str] != string[end]){
            return false;
        }
        str++;
        end--;
    }
    return true;
}

