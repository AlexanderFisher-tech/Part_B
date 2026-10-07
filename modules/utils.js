class TimeStamp {
    static getDate = ()  => {
        const currentDate = new Date(); 
        return currentDate.toString() 
    }
}
module.exports = TimeStamp;
