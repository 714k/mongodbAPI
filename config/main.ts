const config = {
    // port
    // port: process.env.PORT || 3000,
    port: 3000,
    
    // database
    db: 'mongodb://localhost/verbs', 

    useMongoClient: true,

    // test enviroment
    test_env: 'test',
    //test_db: 'mongodb://verbs-test',
    test_port: 3001
};

export default config;