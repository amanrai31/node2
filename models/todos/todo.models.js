import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false                                        // we can add default value for any data point
    }, createdBy: {
        type: mongoose.Schema.Types.ObjectId,                    // user created this todo, now we have to provide the reference
        ref: "User"
    },
    subTodos: [                                                         // Array of SubTodo
        {
            tupe: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);        // name will be todos in mongoDB  