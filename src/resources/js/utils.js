let Utils = {
    /*
    * Formats an integer into nicely formatted price
    */
    formatPrice: function(pence) {
        return `£${ pence / 100 }`;
    }
}



export default Utils