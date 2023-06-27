function isTriangle(a,b,c)
{
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if((a + b > c) && (a + c > b) && (c + b > a)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isTriangle(0,-1,-2));