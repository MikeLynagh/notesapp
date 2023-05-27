//mongodb+srv://fullstack:fullstack23@cluster0.zu4qpgo.mongodb.net/?retryWrites=true&w=majority

// password fullstack23

const mongoose = require("mongoose")

if (process.argv.length<3){
    console.log("give password as argument")
    process.exit(1)
}

const password = process.argv[2]

const url = "mongodb+srv://fullstack:fullstack23@cluster0.zu4qpgo.mongodb.net/notesapp?retryWrites=true&w=majority"

mongoose.set("strictQuery", false)
mongoose.connect(url)

// define schema and matching model 
const noteSchema = new mongoose.Schema({
    content: String, 
    important: Boolean,
})

const Note = mongoose.model("Note", noteSchema)

// this is a constructor function, creates a new js object 
const note = new Note({
    content: "HTML is easy",
    important: true,
})

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

// note.save().then(result => {
//     console.log("note saved")
//     mongoose.connection.close()
// })