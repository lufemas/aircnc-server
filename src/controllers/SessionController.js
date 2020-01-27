const User = require('../models/User');

// index, show, store, update, destroy
module.exports = {
    async store(req, res) {
        const { email } = req.body; // the {} does the same as 'email = req.body.email'
        
        let user = await User.findOne({ email}) // or { email: email }

        if (!user) {
            user = await User.create({email});
        }

        // const user = await User.create({email});

        return res.json(user);
    }
};