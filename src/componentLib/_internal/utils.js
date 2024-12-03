
    export function verifyProp(prop,value,allowedValues){
        if (allowedValues.includes(value)){
            return true;
        }
        else {
            console.warn(`Value: ${value} in invalid. The only avalaible values for >${prop}< are: ${allowedValues}`);
            return false;
        }
    }

export default {verifyProp}
