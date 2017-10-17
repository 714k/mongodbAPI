import * as express from 'express';

import {
    getAllVerbs,
    getVerbById,
    addVerb,
    updateVerb,
    deleteVerb
} from '../controllers/VerbController'

export default (app) => {

    const apiRoutes = express.Router();
    const verbsRoutes = express.Router();

    /**
     * VERBS ROUTES
     */


    apiRoutes.use('/verbs', verbsRoutes);
    verbsRoutes.use('/verbs', getAllVerbs);
    verbsRoutes.use('/verbs', addVerb);
    verbsRoutes.use('/verbs:id', getVerbById);
    verbsRoutes.use('/verbs:id', updateVerb);
    verbsRoutes.use('/verbs:id', deleteVerb);
    
    app.use('/api', apiRoutes);
    app.get('/api/v1/verbs', getAllVerbs);
}