//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if ( typeof otp !== "string" ) {
        return "Invalid";
    }

    else {
        if (otp.length !== 8 || otp.startsWith("ph-") === false) {
            return false;
        }
        else {
            return true;
        }
    }
}



let result = validOtp("pr-54327");
console.log(result);