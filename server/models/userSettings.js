import mongoose from 'mongoose';

const userSettingsSchema = mongoose.Schema({
    // email: String ||| What should go here?
});

const Settings = mongoose.model('Settings', userSettingsSchema)

export default Settings;