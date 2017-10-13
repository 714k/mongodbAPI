import Verb from '../models/Verbs';

export function getAllVerbs(req, res, next) {
    Verb.find(err, verbs) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verbs});
    }
}

export function getVerbById(req, res, next) {
    const id = req.params.id;

    Verb.findById(id, (err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}

export function addVerb(req, res, next) {
    const title = req.body.title;
    const meaning = req.body.meaning;
    const srcImg = req.body.srcImg;
    const form = req.body.form;
    const category = req.body.category;
    const examples = req.body.examples;

    if (!title) {
        res.status(422).json({err: 'Title is  required'});
        return;
    }
    
    if (!meaning) {
        res.status(422).json({err: 'Meaning is  required'});
        return;
    }
    
    if (!srcImg) {
        res.status(422).json({err: 'Src img is  required'});
        return;
    }
    
    if (!form) {
        res.status(422).json({err: 'Form is  required'});
        return;
    }
    
    if (!category) {
        res.status(422).json({err: 'Category is  required'});
        return;
    }
    
    if (!examples) {
        res.status(422).json({err: 'Examples is  required'});
        return;
    }

    const verb = new Verb({
        title,
        meaning,
        srcImg,
        form,
        category,
        examples
    });

    verb.save((err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
    
}

export function updateVerb(req, res, next) {
    const id = res.params.id;

    Verb.findByIdAndUpdate(id, req.body, (err, verb) => {
        if(err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}

export function deleteVerb(req, res, next) {
    const id = req.params.id;

    Verb.findByIdAndRemove(id, (err, verb) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({verb});
    });
}