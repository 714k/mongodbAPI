import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VerbSchema = new Schema({
    id: {
        type: Number,
        required: true,
        default: 0
    },
    title: {
        type: String,
        required: true,
        default: ''
    },
    meaning: {
        type: String,
        required: true,
        default: ''
    },
    srcImg: {
        type: String,
        required: true,
        default: ''
    },
    form: {
        infinitive: {
            type: String,
            required: true,
            default: ''
        },
        simplePast: {
            type: String,
            required: true,
            default: ''
        },
        pastParticiple: {
            type: String,
            required: true,
            default: ''
        }
    },
    category: {
        type: String,
        required: true,
        default: 'infinitive'
    },
    examples: {
        type: Array,
        required: true,
        default: ''
    }
});

export default mongoose.model('Verb', VerbSchema);