var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://todo:todo@ds133398.mlab.com:33398/todo');


module.exports = {
    mongoose
}
