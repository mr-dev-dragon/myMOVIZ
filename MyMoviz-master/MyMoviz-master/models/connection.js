var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://david:hgm4lRQq8QM1p3P8@cluster0-9xbpy.mongodb.net/mymovizapp?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose